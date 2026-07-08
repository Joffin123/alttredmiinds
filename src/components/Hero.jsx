import Image from 'next/image';
import Reveal from './Reveal';
import Container from './Container';

export default function Hero() {
  return (
    <section className="relative pt-10 pb-12 sm:pt-12 lg:pb-[59px] lg:pt-4">
      <Container className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
        <div className="w-full max-w-[560px] text-center lg:w-[580px] lg:max-w-none lg:pl-[70px] lg:pt-3 lg:text-left">
          <Reveal as="h1" className="text-[30px] font-medium leading-[1.18] text-ink sm:text-[32px] lg:text-[45px] lg:leading-[1.13]">
            Scale Revenue with<br>a Growth Partner,<br>Not Just Another Agency.
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
              className="group inline-flex h-[48px] items-center gap-3 rounded-full bg-ink pl-5 pr-2 transition-all duration-300 hover:scale-[1.02] hover:opacity-95 active:scale-95 sm:h-[52px] sm:pl-6 sm:pr-[9px]"
            >
              <span className="text-[13px] font-semibold text-white sm:text-sm">Book a Free Growth Strategy Call</span>
              <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-brand transition-transform duration-300 ease-out group-hover:scale-105 sm:h-[34px] sm:w-[34px]">
                <svg width="8" height="12" viewBox="0 0 6 10" fill="none" className="transition-transform duration-300 ease-out group-hover:translate-x-[2px]">
                  <path d="M1 1L4.573 4.246a.35.35 0 0 1 0 .508L1 9" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
            </a>
          </Reveal>
        </div>
        <Reveal
          delay={150}
          className="group relative h-[280px] w-full max-w-[534px] shrink-0 sm:h-[360px] lg:mr-[58px] lg:h-[465px] lg:w-[534px]"
        >
          {/* Main image container */}
          <div className="relative h-full w-full overflow-hidden rounded-3xl transition-transform duration-500 ease-out group-hover:-translate-y-1">
            <Image
              src="/images/hero-image.png"
              alt="The Alttred Miinds team"
              fill
              sizes="(max-width: 1024px) 90vw, 533px"
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
