import Reveal from './Reveal';

export default function CTA() {
  return (
    <section id="cta" className="px-4 pt-14 pb-16 sm:px-8 sm:pt-16 sm:pb-20 lg:px-[104px] lg:pb-[100px] lg:pt-[75px]">
      <Reveal
        className="relative overflow-hidden rounded-3xl bg-deep px-6 py-10 sm:px-10 sm:py-12 lg:h-[296px] lg:px-[58px] lg:py-0"
      >
        <h2 className="text-[26px] font-medium leading-[1.3] text-white sm:text-[34px] lg:pt-[33px] lg:text-[42px] lg:leading-[1.25]">
          Ready to Build
          <br />a Predictable Growth Engine?
        </h2>
        <p className="mt-4 max-w-[439px] text-[13px] leading-relaxed text-white sm:mt-5 lg:absolute lg:right-[60px] lg:top-[171px] lg:mt-0 lg:w-[439px] lg:text-right">
          Whether you&rsquo;re looking to generate more qualified leads, improve ROAS, increase
          conversions or strengthen your organic presence, we&rsquo;ll help you build a growth
          strategy that delivers measurable results.
        </p>
        <a
          href="#"
          className="mt-6 inline-flex h-[48px] items-center gap-2.5 rounded-full bg-white pl-5 pr-2 transition duration-300 hover:scale-[1.03] hover:opacity-90 active:scale-95 sm:h-[52px] sm:pr-[9px] lg:absolute lg:bottom-[48px] lg:left-[58px] lg:mt-0"
        >
          <span className="text-[13px] font-medium text-black sm:text-sm">Book Your Free Growth Strategy Call</span>
          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-brand sm:h-[34px] sm:w-[34px]">
            <svg width="8" height="12" viewBox="0 0 6 10" fill="none">
              <path d="M1 1L4.573 4.246a.35.35 0 0 1 0 .508L1 9" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </span>
        </a>
      </Reveal>
    </section>
  );
}
