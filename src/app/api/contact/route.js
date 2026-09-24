import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const MAX = { name: 120, email: 200, phone: 40, company: 160, vertical: 80, budget: 80, message: 5000 };

const LABELS = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  company: 'Company',
  vertical: 'Vertical',
  budget: 'Budget',
  message: 'Message',
};

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
  if (data.phone) {
    const digits = data.phone.replace(/\D/g, '').length;
    if (!/^\+?[\d\s().-]+$/.test(data.phone) || digits < 7 || digits > 15) errors.phone = 'Please enter a valid phone number.';
  }
  if (data.message.length < 10) errors.message = 'Please add a little more detail.';
  if (Object.keys(errors).length) {
    return NextResponse.json({ error: 'Please fix the highlighted fields.', errors }, { status: 422 });
  }

  const {
    SMTP_HOST = 'smtp.gmail.com',
    SMTP_PORT = '465',
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO_EMAIL = 'ganesh@alttredmiinds.com',
    CONTACT_FROM_EMAIL,
  } = process.env;

  if (!SMTP_USER || !SMTP_PASS) {
    // No mailbox credentials configured (local dev): log the lead so nothing is lost.
    console.info('[contact] New strategy call request', data);
    return NextResponse.json({ ok: true, delivered: false });
  }

  const rows = Object.entries(data)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#777">${LABELS[k]}</td><td>${escape(v || '—')}</td></tr>`
    )
    .join('');

  const port = Number(SMTP_PORT);

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      // Gmail rewrites From to the authenticated mailbox, so keep them aligned.
      from: CONTACT_FROM_EMAIL || `Alttred Miinds <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL.split(',').map((s) => s.trim()).filter(Boolean),
      replyTo: `${data.name} <${data.email}>`,
      subject: `Strategy call request: ${data.name}${data.company ? ` (${data.company})` : ''}`,
      text: Object.entries(data)
        .map(([k, v]) => `${LABELS[k]}: ${v || '—'}`)
        .join('\n'),
      html: `<h2>New strategy call request</h2><table>${rows}</table>`,
    });
  } catch (err) {
    console.error('[contact] Email delivery failed', err);
    return NextResponse.json({ error: 'We could not send your message. Please email us directly.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: true });
}
