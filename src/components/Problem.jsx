import Reveal from './Reveal';

const ITEMS = [
  { color: 'bg-brand', hoverBg: 'hover:bg-brand/[0.04]', text: 'Running Google Ads alone won’t scale your business.' },
  { color: 'bg-pink', hoverBg: 'hover:bg-pink/[0.05]', text: 'Publishing SEO content alone won’t generate predictable growth.' },
  { color: 'bg-sky', hoverBg: 'hover:bg-sky/[0.05]', text: 'A beautiful website alone won’t increase conversions.' },
  { color: 'bg-gold', hoverBg: 'hover:bg-gold/[0.05]', text: 'Real growth happens when every part of your marketing works together.' },
];

export default function Problem() {
  return (
    <section className="px-4 pt-12 sm:px-8 sm:pt-14 lg:px-[96px] lg:pt-[48px]">
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

      <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:mt-[44px] lg:mx-[55px] lg:h-[124px] lg:grid-cols-4 lg:gap-0 lg:border lg:border-ink/[0.09] lg:bg-white">
        {ITEMS.map((item, i) => (
          <Reveal
            key={item.text}
            delay={160 + i * 90}
            className={`group relative flex items-center overflow-hidden rounded-xl border border-ink/[0.09] bg-white px-6 py-4 ${item.hoverBg} shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md lg:rounded-none lg:border-0 lg:px-[30px] lg:py-0 lg:shadow-none lg:hover:translate-y-0`}
          >
            <span className={`absolute inset-y-0 left-0 w-1 ${item.color}`}></span>
            <p className="text-sm leading-snug text-muted transition-colors duration-300 group-hover:text-ink">{item.text}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 h-px bg-hairline sm:mt-12 lg:mt-[38px]"></div>
    </section>
  );
}
