import Reveal from './Reveal';

const ITEMS = [
  'Want predictable lead generation',
  'Are investing in long-term growth',
  'Need a strategic marketing partner',
  'Value measurable business outcomes',
  'Are ready to scale with confidence',
];

export default function WhoWeWorkWith() {
  return (
    <section className="px-4 pt-12 sm:px-8 sm:pt-16 lg:px-[96px] lg:pt-[74px]">
      {/* Symmetrical divider line */}
      <div className="mb-8 h-px w-full bg-hairline sm:mb-10 lg:mb-[42px]"></div>
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:justify-between lg:gap-0 lg:px-[70px]">
        <Reveal className="w-full lg:w-[420px]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-brand sm:text-[13px]">Who We Work With</p>
          <h2 className="mt-3 text-[24px] font-medium leading-[1.3] text-ink sm:text-[30px] lg:text-[38px] lg:leading-[1.25]">
            Built for Businesses
            <br />
            Ready to Scale
          </h2>
          <p className="mt-5 text-sm text-muted sm:mt-7 sm:text-base">We work best with businesses that:</p>
        </Reveal>
        <div className="flex w-full flex-col gap-3 sm:gap-4 lg:w-[585px] lg:gap-[17px]">
          {ITEMS.map((label, i) => (
            <Reveal
              key={label}
              delay={i * 90}
              className="group flex h-[64px] cursor-pointer items-center gap-3 rounded-2xl border border-ink/[0.09] bg-white px-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:shadow-[0_15px_30px_rgba(31,111,74,0.25)] sm:h-[72px] sm:gap-4 sm:px-6 lg:h-[78px] lg:px-[27px]"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors duration-300 group-hover:bg-white group-hover:text-brand sm:h-7 sm:w-7">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="h-2.5 w-auto">
                  <path d="M1 4L3.5 6.5L9 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="text-sm font-medium text-ink transition-colors duration-300 group-hover:text-white sm:text-[15px]">{label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
