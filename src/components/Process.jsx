import Reveal from './Reveal';

const STEPS = [
  { n: 1, title: 'Discover', desc: 'We understand your business, customers, competitors and growth opportunities.' },
  { n: 2, title: 'Build', desc: 'We develop campaigns, websites, content and creative aligned to your goals.' },
  { n: 3, title: 'Optimize', desc: 'We continuously test, measure and improve every stage of the customer journey.' },
  { n: 4, title: 'Scale', desc: 'We double down on what’s working to deliver sustainable, long-term growth.' },
];

export default function Process() {
  return (
    <section id="process" className="px-4 pt-12 sm:px-8 sm:pt-16 lg:px-[96px] lg:pt-[55px]">
      <div className="mb-8 h-px w-full bg-hairline sm:mb-10 lg:mb-[35px]"></div>
      <Reveal as="p" className="text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-brand sm:text-[13px]">
        Our Process
      </Reveal>
      <Reveal
        as="h2"
        delay={80}
        className="mt-3 text-center text-[26px] font-medium leading-[1.25] text-ink sm:text-[32px] lg:text-[38px] lg:leading-[1.23]"
      >
        How We Build
        <br />
        Predictable Growth
      </Reveal>

      <div className="relative mt-10 sm:mt-12 lg:mt-[54px] lg:pl-[70px]">
        {/* Symmetrical connecting line: mathematically centers from Circle 1 to Circle 4 */}
        <div className="absolute left-[102px] right-[calc(25%-105px)] top-8 hidden h-px bg-hairline lg:block"></div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-[74px] lg:gap-y-0">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 100} className="group relative flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="step-shadow relative flex h-14 w-14 items-center justify-center rounded-full border border-brand bg-brand transition-all duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                <span className="text-[18px] font-bold text-white sm:text-[22px]">{step.n}</span>
              </div>
              <h4 className="mt-4 text-[16px] font-bold text-ink transition-colors duration-300 group-hover:text-brand sm:mt-5 sm:text-[18px]">{step.title}</h4>
              <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-ink sm:mt-2.5">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
