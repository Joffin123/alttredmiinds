import Image from 'next/image';
import Reveal from './Reveal';

const CLIENTS = [
  { src: '/images/client-1.png', alt: 'Swiggy', w: 518, h: 155 },
  { src: '/images/client-2.png', alt: 'Mamaearth', w: 767, h: 108 },
  { src: '/images/client-3.png', alt: 'IFB', w: 227, h: 95 },
  { src: '/images/client-4.png', alt: 'Jawa', w: 242, h: 142 },
  { src: '/images/client-5.png', alt: 'Dot & Key', w: 510, h: 121 },
  { src: '/images/client-6.png', alt: 'Kama Ayurveda', w: 436, h: 126 },
  { src: '/images/client-7.png', alt: 'UV Airspace', w: 985, h: 120 },
  { src: '/images/client-8.png', alt: 'Salt Oral', w: 985, h: 120 },
];

function Logo({ client }) {
  return (
    <Image
      src={client.src}
      alt={client.alt}
      width={client.w}
      height={client.h}
      className="h-6 w-auto shrink-0 object-contain sm:h-7 lg:h-[30px]"
    />
  );
}

export default function LogoStrip() {
  return (
    <Reveal as="section">
      <div className="flex h-[64px] items-center overflow-hidden border-y border-hairline bg-cream sm:h-[72px] lg:mx-[96px] lg:h-[57px]">
        <div className="flex h-full w-full items-center px-4 sm:px-8 lg:px-0">
          <p className="w-[90px] shrink-0 text-[10px] font-semibold uppercase leading-tight tracking-wider text-muted lg:ml-[28px] lg:w-[104px]">
            Trusted by Brands
          </p>

          <div className="flex h-full flex-1 items-center overflow-hidden pl-4 lg:pl-[76px]">
            <div className="flex shrink-0 animate-marquee items-center gap-12 lg:gap-16">
              {CLIENTS.map((client) => (
                <Logo key={client.alt} client={client} />
              ))}
              {CLIENTS.map((client) => (
                <Logo key={`dup-${client.alt}`} client={client} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 px-4 text-sm leading-relaxed text-muted sm:ml-auto sm:mt-[18px] sm:max-w-[560px] sm:px-8 sm:text-right sm:text-base lg:mr-[152px] lg:mt-5 lg:max-w-[505px] lg:px-0">
        Helping businesses across Healthcare, D2C, SaaS, Manufacturing, Real Estate, Education,
        and Professional Services.
      </p>
    </Reveal>
  );
}
