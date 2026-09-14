'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { site } from '@/data/site';
import Button from './Button';
import { WordReveal, ease } from './motion';

const GRAPH_PATH = 'M7 63 L60 63 L95 81 L120 98 L140 98 L175 63 L210 63 L245 27 L262 27 L280 43 L315 9';

const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/** Line graph that draws itself, then a glowing data point keeps travelling along it. */
function GrowthGraph() {
  const pathRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const dot = dotRef.current;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;

    const place = (p) => {
      const pt = path.getPointAtLength(len * p);
      dot.setAttribute('transform', `translate(${pt.x} ${pt.y})`);
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      path.style.strokeDashoffset = '0';
      place(0.55);
      dot.style.opacity = '1';
      return;
    }

    const START = 500; // wait for the headline
    const DRAW = 2400;
    const TRAVEL = 4200;
    let raf;
    let t0;

    const tick = (now) => {
      t0 ??= now;
      const t = now - t0 - START;
      if (t < 0) {
        path.style.strokeDashoffset = `${len}`;
        dot.style.opacity = '0';
      } else if (t < DRAW) {
        const p = easeInOut(t / DRAW);
        path.style.strokeDashoffset = `${len * (1 - p)}`;
        dot.style.opacity = '1';
        place(p);
      } else {
        path.style.strokeDashoffset = '0';
        const loop = ((t - DRAW) % TRAVEL) / TRAVEL;
        const p = easeInOut(loop);
        place(p);
        // fade the point in and out at each end of the line
        dot.style.opacity = `${Math.min(1, Math.min(loop, 1 - loop) * 8)}`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg viewBox="0 0 322 110" className="mx-auto h-auto w-[250px] overflow-visible sm:w-[320px]" aria-hidden="true">
      <defs>
        <linearGradient id="graph-stroke" x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.15" />
          <stop offset="0.35" stopColor="#fff" stopOpacity="0.75" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.95" />
        </linearGradient>
        <filter id="graph-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      <path
        ref={pathRef}
        d={GRAPH_PATH}
        fill="none"
        stroke="url(#graph-stroke)"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
        style={{ strokeDashoffset: 1000 }}
      />
      <g ref={dotRef} style={{ opacity: 0 }}>
        <circle r="9" fill="#fff" opacity="0.55" filter="url(#graph-glow)" />
        <circle r="4.2" fill="#0c0c0b" stroke="#fff" strokeWidth="1.3" />
        <circle r="2" fill="#fff" />
      </g>
    </svg>
  );
}

/** The blueprint dial behind the hero: concentric rings with slowly counter-rotating tick bands. */
function Dial() {
  const rings = [470, 441, 400, 371, 331, 312, 285, 271, 243, 228, 201, 186, 158, 144, 116, 102, 75, 60, 32];
  const outerTicks = Array.from({ length: 80 }, (_, i) => (i * 360) / 80);
  const innerTicks = Array.from({ length: 80 }, (_, i) => (i * 360) / 80);
  const spokes = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5];

  return (
    <svg viewBox="-700 -700 1400 1400" className="h-full w-full" aria-hidden="true">
      <g stroke="#fff" fill="none" strokeWidth="0.7" opacity="0.14">
        {rings.map((r) => (
          <circle key={r} r={r} />
        ))}
      </g>
      <g stroke="#fff" strokeWidth="0.8" opacity="0.08">
        {spokes.map((a) => (
          <line key={a} x1="0" y1="-700" x2="0" y2="700" transform={`rotate(${a})`} />
        ))}
      </g>
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}>
        {outerTicks.map((a) => (
          <line key={a} x1="0" y1="-303" x2="0" y2="-272" transform={`rotate(${a})`} stroke="#861D2C" strokeWidth="1.3" opacity="0.7" />
        ))}
        <path d="M 250 -101 A 270 270 0 0 0 -97 -252" stroke="#fff" strokeWidth="24" fill="none" opacity="0.05" />
        <path d="M -330 70 A 338 338 0 0 0 -190 280" stroke="#fff" strokeWidth="30" fill="none" opacity="0.06" />
      </motion.g>
      <motion.g animate={{ rotate: -360 }} transition={{ duration: 140, repeat: Infinity, ease: 'linear' }}>
        {innerTicks.map((a) => (
          <line key={a} x1="0" y1="-180" x2="0" y2="-160" transform={`rotate(${a})`} stroke="#ececec" strokeWidth="1" opacity="0.18" />
        ))}
        <path d="M 145 55 A 155 155 0 0 1 60 142" stroke="#fff" strokeWidth="14" fill="none" opacity="0.07" />
      </motion.g>
      <circle r="150" fill="#141413" opacity="0.5" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-[128px] text-center sm:pt-[150px] lg:pb-[120px] lg:pt-[173px]">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[330px] -z-10 aspect-square w-[1100px] -translate-x-1/2 -translate-y-1/2 opacity-80 sm:w-[1400px] lg:top-[350px]"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 2.2, ease }}
        style={{ maskImage: 'radial-gradient(circle, #000 35%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, #000 35%, transparent 70%)' }}
      >
        <Dial />
      </motion.div>

      <div className="container-site">
        <GrowthGraph />

        <WordReveal
          as="h1"
          immediate
          delay={0.15}
          lines={[site.tagline]}
          className="heading-xl mx-auto mt-3 max-w-[1044px] text-[42px] sm:text-[54px] lg:text-[66px]"
        />

        <motion.p
          className="mx-auto mt-7 max-w-[552px] text-[18px] leading-[1.4] text-cream sm:text-[22px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
        >
          {site.description}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.9, ease }} className="mt-11">
          <Button className="min-w-[255px]">Let&apos;s Talk Growth</Button>
        </motion.div>
      </div>
    </section>
  );
}
