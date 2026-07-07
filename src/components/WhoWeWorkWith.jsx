import Reveal from './Reveal';

const ITEMS = [
  { label: 'Want predictable lead generation', active: false },
  { label: 'Are investing in long-term growth', active: false },
  { label: 'Need a strategic marketing partner', active: true },
  { label: 'Value measurable business outcomes', active: false },
  { label: 'Are ready to scale with confidence', active: false },
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
          {ITEMS.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 90}
              className={`group flex h-[64px] items-center gap-3 rounded-2xl border px-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg sm:h-[72px] sm:gap-4 sm:px-6 lg:h-[78px] lg:px-[27px] cursor-pointer ${
                item.active 
                  ? 'bg-brand border-brand hover:bg-brand/95 hover:shadow-[0_15px_30px_rgba(31,111,74,0.25)]' 
                  : 'bg-white border-ink/[0.09] hover:bg-cream'
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-300 sm:h-7 sm:w-7 ${
                  item.active ? 'bg-white text-brand' : 'bg-brand text-white'
                }`}
              >
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="h-2.5 w-auto">
                  <path d="M1 4L3.5 6.5L9 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className={`text-sm font-medium sm:text-[15px] transition-colors duration-300 ${item.active ? 'text-white' : 'text-ink'}`}>{item.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
