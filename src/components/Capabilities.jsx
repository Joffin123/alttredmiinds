import Image from 'next/image';
import Reveal from './Reveal';

const CARDS = [
  {
    img: '/images/capabilities-1.png',
    alt: 'Performance Marketing',
    title: 'Performance Marketing',
    desc: 'Google Ads, Meta Ads, LinkedIn Ads, Shopping Ads, Remarketing.',
    descWidth: 'lg:w-[354px]',
  },
  {
    img: '/images/capabilities-2.png',
    alt: 'SEO, AIO and GEO',
    title: 'SEO • AIO • GEO',
    desc: (
      <>
        Technical SEO, Content Strategy, Local SEO
        <br className="hidden lg:block" />
        AI Search Optimization, Authority Building.
      </>
    ),
    descWidth: 'lg:w-[382px]',
  },
  {
    img: '/images/capabilities-3.png',
    alt: 'Conversion Rate Optimization',
    title: 'Conversion Rate Optimization',
    desc: 'Landing Pages, A/B Testing, User Journey Optimization, Funnels.',
    descWidth: 'lg:w-[447px]',
  },
  {
    img: '/images/capabilities-4.png',
    alt: 'Web Development',
    title: 'Web Development',
    desc: 'Business Websites, Landing Pages, WordPress, Shopify, Webflow.',
    descWidth: 'lg:w-[395px]',
  },
  {
    img: '/images/capabilities-5.png',
    alt: 'Creative Strategy',
    title: 'Creative Strategy',
    desc: 'Static Creatives, Video Ads, Campaign Design, Ad Copy.',
    descWidth: 'lg:w-[312px]',
  },
  {
    img: '/images/capabilities-6.png',
    alt: 'Analytics and Reporting',
    title: 'Analytics & Reporting',
    desc: (
      <>
        GA4, Looker Studio, Tracking,
        <br className="hidden lg:block" />
        Performance Dashboards
      </>
    ),
    descWidth: 'lg:w-[443px]',
  },
];

export default function Capabilities() {
  return (
    <section id="services" className="px-4 pt-12 sm:px-8 sm:pt-16 lg:px-[96px] lg:pt-[53px]">
      <div className="mb-8 h-px bg-hairline sm:mb-10 lg:mb-[35px]"></div>
      <Reveal as="p" className="text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-brand sm:text-[13px]">
        Capabilities
      </Reveal>
      <Reveal as="h2" delay={80} className="mt-3 text-center text-[26px] font-medium text-ink sm:text-[32px] lg:text-[38px]">
        Everything You Need to Scale
      </Reveal>
      <Reveal
        delay={140}
        as="p"
        className="mx-auto mt-4 max-w-[559px] text-center text-sm leading-relaxed text-muted sm:text-base lg:w-[559px]"
      >
        Performance Marketing, SEO, CRO, and Creative Strategy, working as one
        <br className="hidden sm:block" />
        system toward one outcome.
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:mx-[45px] lg:mt-[71px] lg:grid-cols-2 lg:gap-x-[39px] lg:gap-y-[44px]">
        {CARDS.map((card, i) => (
          <Reveal
            key={card.title}
            delay={i * 90}
            className="cap-shadow group relative h-[280px] overflow-hidden rounded-2xl sm:h-[340px] lg:h-[420px] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(19,18,15,0.15)] cursor-pointer"
          >
            <Image
              src={card.img}
              alt={card.alt}
              fill
              sizes="(max-width: 1440px) 50vw, 700px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="card-gradient absolute inset-0"></div>
            <div className="absolute inset-x-0 bottom-0 p-5 pb-6 sm:p-7 lg:p-[29px] lg:pb-[34px]">
              <h3 className="text-[20px] font-bold text-white sm:text-[24px] lg:text-[28px]">{card.title}</h3>
              <p className={`mt-2 max-w-[420px] text-sm text-white/80 sm:text-base ${card.descWidth}`}>{card.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
