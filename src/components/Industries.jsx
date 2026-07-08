import Reveal from './Reveal';

const INDUSTRIES = [
  'Healthcare',
  'D2C & eCommerce',
  'SaaS',
  'Professional Services',
  'Real Estate',
  'Education',
  'Manufacturing',
  'Finance',
  'Hospitality',
];

function Pill({ label }) {
  return (
    <span className="flex h-[40px] shrink-0 cursor-pointer items-center rounded-full border border-ink/[0.09] bg-white px-4 text-[13px] font-medium text-ink transition-all duration-300 delay-150 ease-out hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-white hover:shadow-[0_10px_20px_rgba(31,111,74,0.2)] hover:delay-100 sm:h-[45px] sm:px-[18px] sm:text-[14.5px]">
      {label}
    </span>
  );
}

export default function Industries() {
  return (
    <section id="industries" className="pt-12 sm:pt-16 lg:pt-[59px]">
      <div className="mx-4 mb-8 h-px bg-hairline sm:mx-8 sm:mb-10 lg:mx-[96px] lg:mb-[39px]"></div>
      <Reveal as="p" className="text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-brand sm:text-[13px]">
        Industries
      </Reveal>
      <Reveal as="h2" delay={80} className="mx-auto mt-3 max-w-[439px] px-4 text-center text-[24px] font-medium leading-[1.3] text-ink sm:text-[30px] lg:text-[38px] lg:leading-[1.23]">
        Growth expertise across your sector
      </Reveal>
      <div className="relative mt-8 overflow-hidden sm:mt-10 lg:mt-[20px] lg:mx-[96px]">
        <div className="flex w-max shrink-0 animate-marquee items-center gap-3 whitespace-nowrap px-6 sm:gap-[19px]">
          {INDUSTRIES.map((label) => (
            <Pill key={label} label={label} />
          ))}
          {INDUSTRIES.map((label) => (
            <Pill key={`dup-${label}`} label={label} />
          ))}
        </div>
        <div className="fade-left pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-[60px] lg:w-[100px]"></div>
        <div className="fade-right pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-[60px] lg:w-[100px]"></div>
      </div>
      {/* Full-width divider below the pills, matching the navbar divider */}
      <div className="relative left-1/2 mt-8 h-px w-screen -translate-x-1/2 bg-hairline sm:mt-10 lg:mt-[36px]"></div>
    </section>
  );
}
