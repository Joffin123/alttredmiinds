'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import { Reveal, WordReveal } from './motion';

// Circuit traces from the design, in the SVG's own 1198 × 438 coordinate space.
const traces = [
  'M4.53 0.45V116.38C4.53 117.59 5.01 118.74 5.86 119.59L57.58 171.31C58.43 172.16 58.91 173.31 58.91 174.51V255.1C58.91 257.61 60.93 259.63 63.44 259.63H497.53',
  'M1196.24 0.45V116.38C1196.24 117.59 1195.76 118.74 1194.91 119.59L1143.19 171.31C1142.34 172.16 1141.86 173.31 1141.86 174.51V255.1C1141.86 257.61 1139.83 259.63 1137.33 259.63H703.24',
  'M552.81 287.27V306.76C552.81 309.26 550.78 311.29 548.28 311.29H447.68C445.18 311.29 443.15 313.32 443.15 315.82V362.43C443.15 363.63 442.67 364.78 441.83 365.63L389.2 418.26C388.35 419.11 387.87 420.26 387.87 421.46V436.35',
  'M647.96 287.27V306.76C647.96 309.26 649.99 311.29 652.49 311.29H753.09C755.59 311.29 757.62 313.32 757.62 315.82V362.43C757.62 363.63 758.1 364.78 758.94 365.63L811.57 418.26C812.42 419.11 812.9 420.26 812.9 421.46V436.35',
  'M58.91 436.8V376.15C58.91 374.95 59.38 373.8 60.23 372.95L112.86 320.32C113.71 319.47 114.19 318.32 114.19 317.12V259.63',
  'M1140.96 436.8V376.15C1140.96 374.95 1140.48 373.8 1139.63 372.95L1087 320.32C1086.16 319.47 1085.68 318.32 1085.68 317.12V259.63',
  'M497.53 311.74V385.15C497.53 387.65 499.55 389.68 502.06 389.68H587.7C590.2 389.68 592.23 391.71 592.23 394.21V411.88',
  'M701.88 311.74V385.15C701.88 387.65 699.85 389.68 697.35 389.68H611.71C609.21 389.68 607.18 391.71 607.18 394.21V411.88',
];

function Circuit() {
  return (
    <svg viewBox="0 0 1198 438" className="h-[438px] w-[1198px]" fill="none" aria-hidden="true">
      <defs>
        <filter id="pulse-glow" x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {traces.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="#fff"
          strokeOpacity="0.2"
          strokeWidth="0.9"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.1 + i * 0.08, ease: [0.65, 0, 0.35, 1] }}
        />
      ))}

      {/* Energy pulses travelling toward the button */}
      {[
        { d: traces[0], dur: '4.5s', begin: '1.5s' },
        { d: traces[1], dur: '4.5s', begin: '3.6s' },
        { d: traces[6], dur: '3s', begin: '2.2s' },
        { d: traces[7], dur: '3s', begin: '3.8s' },
      ].map((p, i) => (
        <g key={i} opacity="0">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={p.dur} begin={p.begin} repeatCount="indefinite" />
          <circle r="6" fill="#2f8bff" filter="url(#pulse-glow)" />
          <circle r="2" fill="#9cc9ff" />
          <animateMotion dur={p.dur} begin={p.begin} repeatCount="indefinite" path={p.d} />
        </g>
      ))}

      <motion.g
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.4, duration: 0.6, type: 'spring' }}
      >
        <circle cx="1175.4" cy="139.6" r="7.25" fill="#0F78EE" stroke="#fff" strokeOpacity="0.25" strokeWidth="0.9">
          <animate attributeName="r" values="7.25;8.5;7.25" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <path d="M715 311.7 725 304.5V319Z" fill="#0D6CEA" />
        <rect x="0.45" y="68.4" width="8.2" height="8.2" rx="1.4" fill="#107CF2" stroke="#fff" strokeOpacity="0.25" strokeWidth="0.9" />
        <rect x="524.3" y="307.7" width="8.2" height="8.2" rx="1.4" fill="#0D6CEA" stroke="#fff" strokeOpacity="0.25" strokeWidth="0.9" />
        <path d="M547.4 389.7 557.3 382.4V396.9Z" fill="#045FDF" />
      </motion.g>
    </svg>
  );
}

export default function CTA() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate h-[480px] overflow-hidden bg-[#111] sm:h-[419px]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_55%,rgba(47,139,255,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 max-sm:top-[40px] max-sm:opacity-60">
        <Circuit />
      </div>

      <div className="flex flex-col items-center px-5 pt-[58px] text-center">
        <WordReveal
          id="cta-title"
          lines={['Let’s Build Your Growth Engine.']}
          className="font-display text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-white sm:text-[40px] lg:text-[48.7px]"
          stagger={0.06}
        />
        <Reveal as="p" delay={0.3} className="mt-[15px] max-w-[424px] text-[14.5px] leading-[1.5] text-white/75">
          Strategy, creative, media buying, and optimization—all focused on one thing: measurable growth.
        </Reveal>
        <Reveal delay={0.45} className="mt-8 sm:mt-[63px]">
          <Button className="min-w-[255px]">Let&apos;s Talk Growth</Button>
        </Reveal>
      </div>
    </section>
  );
}
