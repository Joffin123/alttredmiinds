import Hero from '@/components/Hero';
import LogoStrip from '@/components/LogoStrip';
import Pillars from '@/components/Pillars';
import Stats from '@/components/Stats';
import Capabilities from '@/components/Capabilities';
import Industries from '@/components/Industries';
//import Testimonials from '@/components/Testimonials';
//import Team from '@/components/Team';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Pillars />
      <Stats />
      <Capabilities />
      <Industries />
      {/*<Testimonials />*/}
      {/*<Team />*/}
      <CTA />
    </>
  );
}
