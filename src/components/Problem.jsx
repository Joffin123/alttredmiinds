import Reveal from './Reveal';

const ITEMS = [
  { color: 'border-brand', text: 'Running Google Ads alone won’t scale your business.' },
  { color: 'border-pink', text: 'Publishing SEO content alone won’t generate predictable growth.' },
  { color: 'border-sky', text: 'A beautiful website alone won’t increase conversions.' },
  { color: 'border-gold', text: 'Real growth happens when every part of your marketing works together.' },
];

export default function Problem() {
  return (
    <section className="px-4 pt-12 sm:px-8 sm:pt-14 lg:px-[130px] lg:pt-[68px]">
      <Reveal as="p" className="text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-brand sm:text-[13px]">
        The Problem
      </Reveal>
      <Reveal
        as="h2"
        delay={80}
        className="mx-auto mt-3 max-w-[689px] text-center text-[22px] font-medium leading-[1.3] text-ink sm:text-[26px] lg:w-[689px] lg:text-[32px]"
      >
        Most Marketing Doesn&rsquo;t Fail Because of Budget. It Fails Because It&rsquo;s Disconnected.
      </Reveal>

      <div className="mx-auto mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:mt-14 lg:h-[124px] lg:w-[1116px] lg:grid-cols-4 lg:gap-0 lg:border lg:border-ink/[0.09] lg:bg-white lg:gap-y-0">
        {ITEMS.map((item, i) => (
          <Reveal
            key={item.text}
            delay={160 + i * 90}
            className={`flex items-center rounded-xl border border-ink/[0.09] bg-white px-5 py-4 border-l-4 ${item.color} shadow-sm transition hover:-translate-y-1 hover:shadow-md lg:rounded-none lg:border-y-0 lg:border-r-0 lg:px-[30px] lg:py-0 lg:shadow-none lg:hover:translate-y-0 lg:hover:shadow-none`}
          >
            <p className="text-sm leading-snug text-muted">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
