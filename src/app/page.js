import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoStrip from '@/components/LogoStrip';
import Problem from '@/components/Problem';
import GrowthEngine from '@/components/GrowthEngine';
import Capabilities from '@/components/Capabilities';
import Process from '@/components/Process';
import WhyUs from '@/components/WhyUs';
import WhoWeWorkWith from '@/components/WhoWeWorkWith';
import Industries from '@/components/Industries';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-[96px] hidden w-px bg-hairline xl:block"
        style={{ height: 'calc(100% - 322px)' }}
      ></div>
      <div
        className="pointer-events-none absolute inset-y-0 left-[1323px] hidden w-px bg-hairline xl:block"
        style={{ height: 'calc(100% - 322px)' }}
      ></div>

      <Navbar />
      <div className="mt-4 h-px w-full bg-hairline"></div>
      <Hero />
      <LogoStrip />
      <Problem />
      <GrowthEngine />
      <Capabilities />
      <Process />
      <WhyUs />
      <WhoWeWorkWith />
      <Industries />
      <CTA />
      <Footer />
    </div>
  );
}
