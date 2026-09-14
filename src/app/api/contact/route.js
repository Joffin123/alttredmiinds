import { NextResponse } from 'next/server';

const MAX = { name: 120, email: 200, company: 160, vertical: 80, budget: 80, message: 5000 };

const escape = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Bots fill the hidden field; pretend success so they move on.
  if (body.website) return NextResponse.json({ ok: true });

  const data = {};
  for (const key of Object.keys(MAX)) {
    data[key] = String(body[key] ?? '').trim().slice(0, MAX[key]);
  }

  const errors = {};
  if (data.name.length < 2) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) errors.email = 'Please enter a valid email.';
  if (data.message.length < 10) errors.message = 'Please add a little more detail.';
  if (Object.keys(errors).length) {
    return NextResponse.json({ error: 'Please fix the highlighted fields.', errors }, { status: 422 });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    // No mail provider configured (local dev): log the lead so nothing is lost.
    console.info('[contact] New strategy call request', data);
    return NextResponse.json({ ok: true, delivered: false });
  }

  const rows = Object.entries(data)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#777">${k}</td><td>${escape(v || '—')}</td></tr>`)
    .join('');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL || 'Alttred Miinds <onboarding@resend.dev>',
      to: CONTACT_TO_EMAIL.split(',').map((s) => s.trim()),
      reply_to: data.email,
      subject: `Strategy call request: ${data.name}${data.company ? ` (${data.company})` : ''}`,
      html: `<h2>New strategy call request</h2><table>${rows}</table>`,
    }),
  });

  if (!res.ok) {
    console.error('[contact] Email delivery failed', res.status, await res.text());
    return NextResponse.json({ error: 'We could not send your message. Please email us directly.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
