import Reveal from './Reveal';

const LOGOS = [
  <span key="swiggy" className="text-[19px] font-extrabold italic tracking-tight">swiggy</span>,
  <span key="mamaearth" className="text-[18px] font-bold lowercase tracking-tight">mamaearth</span>,
  <span key="ifb" className="font-serif text-[19px] font-bold tracking-[0.15em]">IFB</span>,
  <span key="lg" className="text-[17px] font-extrabold">LG</span>,
  <span key="dotkey" className="text-[15px] font-semibold tracking-[0.08em]">DOT &amp; KEY</span>,
  <span key="kama" className="font-serif text-[17px] font-semibold tracking-[0.3em]">KAMA</span>,
  <span key="uvarspace" className="text-[16px] font-bold tracking-[0.12em]">UVARSPACE</span>,
];

export default function LogoStrip() {
  return (
    <Reveal as="section" className="px-4 sm:px-8 lg:px-[97px]">
      <div className="relative flex h-[52px] flex-col items-center justify-center gap-2 border-y border-hairline sm:h-[57px] sm:flex-row sm:gap-8 sm:pl-7 lg:gap-12">
        <p className="relative z-10 hidden w-[110px] shrink-0 text-[10px] leading-snug text-muted sm:block">
          Trusted by Brands Focused on Growth
        </p>
        <p className="pt-3 text-[10px] leading-snug text-muted sm:hidden">Trusted by Brands Focused on Growth</p>

        {/* mobile: continuous marquee to fit all logos on a narrow screen */}
        <div className="relative flex w-full max-w-full overflow-hidden pb-3 sm:hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-12 text-muted/80">
            {LOGOS}
            {LOGOS.map((logo, i) => (
              <span key={`dup-${i}`} aria-hidden="true">
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* tablet/desktop: static row, original design has room for all logos */}
        <div className="hidden items-center gap-8 text-muted/80 sm:flex lg:gap-12">{LOGOS}</div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted sm:ml-auto sm:mt-[18px] sm:w-[530px] sm:text-right sm:text-base">
        Helping businesses across Healthcare, D2C, SaaS, Manufacturing, Real Estate, Education,
        and Professional Services.
      </p>
    </Reveal>
  );
}
