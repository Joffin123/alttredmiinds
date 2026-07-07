import Reveal from './Reveal';

const INDUSTRIES = [
  { label: 'Healthcare', active: false },
  { label: 'D2C & eCommerce', active: false },
  { label: 'SaaS', active: false },
  { label: 'Professional Services', active: true },
  { label: 'Real Estate', active: false },
  { label: 'Education', active: false },
  { label: 'Manufacturing', active: false },
  { label: 'Finance', active: false },
  { label: 'Hospitality', active: false },
];

function Pill({ item }) {
  return (
    <span
      className={`flex h-[40px] shrink-0 items-center rounded-full border border-ink/[0.09] px-4 text-[13px] font-medium transition hover:-translate-y-0.5 hover:shadow-md sm:h-[45px] sm:px-[18px] sm:text-[14.5px] ${
        item.active ? 'bg-brand text-white' : 'bg-white text-ink'
      }`}
    >
      {item.label}
    </span>
  );
}

export default function Industries() {
  return (
    <section id="industries" className="pt-16 sm:pt-20 lg:pt-[85px]">
      <div className="mx-4 mb-8 h-px bg-hairline sm:mx-8 sm:mb-10 lg:mx-[101px] lg:mb-[39px]"></div>
      <Reveal as="p" className="text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-brand sm:text-[13px]">
        Industries
      </Reveal>
      <Reveal as="h2" delay={80} className="mx-auto mt-3 max-w-[439px] px-4 text-center text-[24px] font-medium leading-[1.3] text-ink sm:text-[30px] lg:text-[38px] lg:leading-[1.23]">
        Growth expertise across your sector
      </Reveal>

      <div className="relative mt-8 overflow-hidden sm:mt-10 lg:mt-[46px]">
        <div className="flex w-max shrink-0 animate-marquee items-center gap-3 whitespace-nowrap px-6 sm:gap-[19px]">
          {INDUSTRIES.map((item) => (
            <Pill key={item.label} item={item} />
          ))}
          {INDUSTRIES.map((item) => (
            <Pill key={`dup-${item.label}`} item={item} />
          ))}
        </div>
        <div className="fade-left pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-[130px]"></div>
        <div className="fade-right pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-[130px]"></div>
      </div>
    </section>
  );
}
