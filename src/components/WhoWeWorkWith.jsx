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
    <section className="px-4 pt-16 sm:px-8 sm:pt-20 lg:px-[172px] lg:pt-[90px]">
      <div className="mb-8 h-px w-full bg-hairline sm:mb-10 lg:mb-[42px] lg:w-[calc(100%+142px)] lg:-translate-x-[71px]"></div>
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:justify-between lg:gap-0">
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
              className={`flex h-[64px] items-center gap-3 rounded-2xl border border-ink/[0.09] px-5 transition hover:-translate-y-0.5 hover:shadow-md sm:h-[72px] sm:gap-4 sm:px-6 lg:h-[78px] lg:px-[27px] ${
                item.active ? 'bg-brand' : 'bg-white'
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] font-bold sm:h-7 sm:w-7 sm:text-[13px] ${
                  item.active ? 'bg-white text-deep' : 'bg-brand text-white'
                }`}
              >
                &#10003;
              </span>
              <p className={`text-sm sm:text-[15px] ${item.active ? 'text-white' : 'text-ink'}`}>{item.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
