import Link from 'next/link';

/** Simple long-form layout for policy pages. */
export default function LegalPage({ title, updated, sections }) {
  return (
    <article className="container-site max-w-[760px] pb-28 pt-[140px] lg:pt-[190px]">
      <Link href="/" className="text-[13px] uppercase tracking-[0.1em] text-muted transition hover:text-cream">
        ← Back home
      </Link>
      <h1 className="heading-xl mt-6 text-[44px] sm:text-[56px]">{title}</h1>
      <p className="mt-3 text-[14px] text-muted">Last updated {updated}</p>
      <div className="mt-12 space-y-10">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-serif text-[26px] font-light">{s.heading}</h2>
            <p className="mt-3 text-[16px] leading-[1.7] text-sand/80">{s.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
