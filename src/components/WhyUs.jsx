import Image from 'next/image';
import Reveal from './Reveal';

export default function WhyUs() {
  return (
    <section id="why-us" className="px-4 pt-12 sm:px-8 sm:pt-16 lg:px-[96px] lg:pt-[38px]">
      <div className="mb-8 h-px w-full bg-hairline sm:mb-10 lg:mb-[40px]"></div>
      <Reveal as="p" className="text-[12px] font-semibold uppercase tracking-[0.08em] text-brand sm:text-[13px] lg:pl-[70px]">
        Why Alttred Miinds
      </Reveal>
      <Reveal as="h2" delay={80} className="mt-3 max-w-[536px] text-[24px] font-medium leading-[1.3] text-ink sm:text-[30px] lg:max-w-[606px] lg:pl-[70px] lg:text-[38px] lg:leading-[1.25]">
        Built for Businesses That Want More Than Just Marketing.
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-4 lg:mx-[50px] lg:mt-[40px] lg:grid-cols-[726fr_406fr] lg:gap-x-4">
        {/* Card 1: Strategy Before Execution */}
        <Reveal delay={140} className="group relative h-[240px] overflow-hidden rounded-2xl bg-[#d9d9d9] sm:h-[280px] lg:h-[322px] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(19,18,15,0.15)] cursor-pointer">
          <Image
            src="/images/why-alttred-1.png"
            alt="Strategy Before Execution"
            fill
            sizes="726px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-black/[0.31]"></div>
          <div className="absolute inset-0 p-6 lg:p-[30px]">
            <h3 className="max-w-[307px] text-[24px] font-medium leading-[1.2] text-white sm:text-[30px] lg:text-[38px]">Strategy Before Execution</h3>
            <p className="absolute bottom-6 left-6 max-w-[371px] text-sm leading-relaxed text-white lg:bottom-[30px] lg:left-[30px]">
              Every engagement starts with understanding your business&mdash;not selling predefined packages.
            </p>
          </div>
        </Reveal>

        {/* Card 2: Full-Funnel Growth */}
        <Reveal delay={220} className="group relative h-[220px] overflow-hidden rounded-2xl bg-deep sm:h-[260px] lg:h-[322px] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(19,18,15,0.2)] cursor-pointer">
          <div className="absolute inset-0 p-5 lg:p-[22px]">
            <h3 className="max-w-[307px] text-[24px] font-medium leading-[1.2] text-white sm:text-[30px] lg:text-[38px]">Full-Funnel Growth</h3>
            <p className="absolute bottom-6 left-5 max-w-[350px] text-sm leading-relaxed text-white lg:bottom-[30px] lg:left-[22px]">
              Paid media, SEO, CRO, creative and development work together as one connected strategy.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:gap-4 lg:col-span-2 lg:mt-4 lg:grid-cols-[452fr_681fr] lg:gap-x-4">
          {/* Card 3: Future-Ready Marketing */}
          <Reveal delay={300} className="group relative h-[200px] overflow-hidden rounded-2xl border border-ink/[0.09] bg-cream sm:h-[230px] lg:h-[261px] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(19,18,15,0.15)] cursor-pointer">
            <div className="absolute inset-0 p-6 lg:p-[30px]">
              <h3 className="max-w-[307px] text-[24px] font-medium leading-[1.2] text-black sm:text-[30px] lg:text-[38px]">Future&#8209;Ready Marketing</h3>
              <p className="absolute bottom-5 left-6 max-w-[371px] text-sm leading-relaxed text-muted lg:bottom-[26px] lg:left-[30px]">
                We optimize for today&rsquo;s search engines and tomorrow&rsquo;s AI-driven discovery platforms.
              </p>
            </div>
          </Reveal>

          {/* Card 4: Transparent Partnership */}
          <Reveal delay={380} className="group relative h-[200px] overflow-hidden rounded-2xl bg-[#d9d9d9] sm:h-[230px] lg:h-[261px] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(19,18,15,0.15)] cursor-pointer">
            <Image
              src="/images/why-alttred-2.png"
              alt="Transparent Partnership"
              fill
              sizes="681px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 p-5 pt-6 lg:p-[23px] lg:pt-[39px]">
              <h3 className="max-w-[307px] text-[24px] font-medium leading-[1.2] text-white sm:text-[30px] lg:text-[38px]">Transparent Partnership</h3>
              <p className="absolute bottom-5 left-5 max-w-[371px] text-sm leading-relaxed text-white lg:bottom-[24px] lg:left-[23px]">
                Clear communication, measurable KPIs and reporting focused on business impact, not vanity metrics.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
