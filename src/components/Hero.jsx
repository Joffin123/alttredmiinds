import Image from 'next/image';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="relative px-4 pt-10 pb-12 sm:px-8 sm:pt-12 lg:px-[130px] lg:pb-[70px] lg:pt-[52px]">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
        <div className="w-full max-w-[560px] text-center lg:w-[510px] lg:max-w-none lg:pl-9 lg:pt-[10px] lg:text-left">
          <Reveal as="h1" className="text-[30px] font-medium leading-[1.18] text-ink sm:text-[38px] lg:text-[52px] lg:leading-[1.13]">
            Scale Revenue with a Growth Partner, Not Just Another Agency.
          </Reveal>
          <Reveal
            delay={100}
            as="p"
            className="mx-auto mt-5 max-w-[505px] text-sm leading-[1.65] text-muted sm:text-base lg:mx-0 lg:mt-7 lg:w-[505px] lg:text-left"
          >
            We help ambitious businesses generate more qualified leads, improve conversions, and
            drive sustainable growth through Performance Marketing, SEO, AI Search Optimization,
            CRO, Creative Strategy, and high-converting websites.
          </Reveal>
          <Reveal
            delay={180}
            as="p"
            className="mx-auto mt-5 max-w-[495px] text-sm font-medium leading-[1.5] text-ink sm:text-base lg:mx-0 lg:mt-9 lg:w-[495px]"
          >
            Everything works together to deliver one outcome, measurable business growth.
          </Reveal>
          <Reveal delay={260} className="mt-6 flex justify-center lg:mt-[26px] lg:justify-start">
            <a
              href="#cta"
              className="inline-flex h-[48px] items-center gap-3 rounded-full bg-ink pl-5 pr-2 transition duration-300 hover:scale-[1.03] hover:opacity-90 active:scale-95 sm:h-[52px] sm:pl-6 sm:pr-[9px]"
            >
              <span className="text-[13px] font-semibold text-white sm:text-sm">Book a Free Growth Strategy Call</span>
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-brand sm:h-[34px] sm:w-[34px]">
                <svg width="8" height="12" viewBox="0 0 6 10" fill="none">
                  <path d="M1 1L4.573 4.246a.35.35 0 0 1 0 .508L1 9" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal
          delay={150}
          className="hero-shadow h-[280px] w-full max-w-[533px] shrink-0 overflow-hidden rounded-3xl bg-white sm:h-[360px] lg:h-[460px] lg:w-[533px]"
        >
          <Image
            src="/images/hero.jpg"
            alt="The Alttred Miinds team"
            width={533}
            height={460}
            priority
            className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        </Reveal>
      </div>
    </section>
  );
}
