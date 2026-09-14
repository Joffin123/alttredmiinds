'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { capabilities } from '@/data/site';
import { Reveal, WordReveal, ease } from './motion';

function BarsVisual() {
  return (
    <div className="relative h-[127px] w-[110px]">
      {[25, 53, 73, 95].map((h, i) => (
        <motion.span
          key={h}
          className="absolute bottom-[21px] w-[11.5px] origin-bottom rounded-[3px] bg-lime"
          style={{ left: 13 + i * 23, height: h, opacity: 0.46 + i * 0.12 }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: [0, 1, 0.82, 1] }}
          transition={{ duration: 1.3, delay: i * 0.08, times: [0, 0.5, 0.75, 1], ease }}
        />
      ))}
    </div>
  );
}

function CreativeVisual() {
  const cards = [
    { r: -16, x: -22, fill: 'rgba(201,255,87,0.14)' },
    { r: 16, x: 22, fill: 'rgba(201,255,87,0.14)' },
    { r: 0, x: 0, fill: '#c9ff57' },
  ];
  return (
    <div className="relative h-[127px] w-[110px]">
      {cards.map((c, i) => (
        <motion.span
          key={i}
          className="absolute left-[25px] top-[21px] grid h-[84px] w-[60px] place-items-center rounded-lg border border-lime/60"
          style={{ background: c.fill }}
          initial={{ rotate: 0, x: 0, y: 24, opacity: 0 }}
          animate={{ rotate: c.r, x: c.x, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: i * 0.08, ease }}
        >
          {i === 2 && (
            <motion.svg viewBox="0 0 20 20" className="h-6 w-6" initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1] }} transition={{ delay: 0.45, duration: 0.5 }}>
              <path d="M6 4.5v11l9-5.5-9-5.5Z" fill="#0c0c0b" />
            </motion.svg>
          )}
        </motion.span>
      ))}
    </div>
  );
}

function FunnelVisual() {
  return (
    <div className="relative h-[127px] w-[110px]">
      <motion.span
        className="absolute left-1/2 top-[6px] -ml-[4px] h-2 w-2 rounded-full bg-lime"
        animate={{ y: [0, 104], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeIn', times: [0, 0.15, 0.85, 1] }}
      />
      {[96, 66, 36].map((w, i) => (
        <motion.span
          key={w}
          className="absolute left-1/2 h-[16px] rounded-full bg-lime"
          style={{ width: w, top: 22 + i * 32, marginLeft: -w / 2, opacity: 0.45 + i * 0.22 }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: i * 0.1, ease }}
        />
      ))}
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <svg viewBox="0 0 110 127" className="h-[127px] w-[110px]" aria-hidden="true">
      {[30, 60, 90].map((y) => (
        <line key={y} x1="4" x2="106" y1={y} y2={y} stroke="#c9ff57" strokeOpacity="0.15" strokeDasharray="3 4" />
      ))}
      <motion.path
        d="M6 100 L30 80 L50 88 L74 52 L104 30 L104 106 L6 106 Z"
        fill="#c9ff57"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.14 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      />
      <motion.path
        d="M6 100 L30 80 L50 88 L74 52 L104 30"
        fill="none"
        stroke="#c9ff57"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease }}
      />
      <motion.circle cx="104" cy="30" r="4.5" fill="#c9ff57" initial={{ scale: 0 }} animate={{ scale: [0, 1.5, 1] }} transition={{ delay: 0.9, duration: 0.5 }} />
      <motion.circle
        cx="104"
        cy="30"
        r="4.5"
        fill="none"
        stroke="#c9ff57"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: [1, 3], opacity: [0.7, 0] }}
        transition={{ delay: 1.2, duration: 1.4, repeat: Infinity }}
      />
    </svg>
  );
}

const visuals = { bars: BarsVisual, creative: CreativeVisual, funnel: FunnelVisual, analytics: AnalyticsVisual };

function Visual({ type }) {
  const Comp = visuals[type];
  return (
    <motion.div
      key={type}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4, ease }}
      aria-hidden="true"
    >
      <Comp />
    </motion.div>
  );
}

export default function Capabilities() {
  const [active, setActive] = useState(0);

  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="container-site pt-28 lg:pt-[204px]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <WordReveal
          lines={["We're Not Your Agency.", "We're Your In-House Growth Pod."]}
          className="heading-xl text-[36px] leading-[1.2] sm:text-[48px] lg:text-[56px]"
        />
        <Reveal as="p" delay={0.2} className="max-w-[371px] text-[18px] leading-[1.22] text-muted lg:mr-[-43px] lg:mt-11 lg:text-[20px]">
          No vendor hand-offs. No jargon-decks. Four capabilities, one obsession: turning spend into profit.
        </Reveal>
      </div>
      <span id="capabilities-title" className="sr-only">
        Our capabilities
      </span>

      <ul className="mt-14 border-b border-line lg:mt-[81px]">
        {capabilities.map((cap, i) => {
          const isActive = active === i;
          return (
            <Reveal
              as="li"
              key={cap.id}
              delay={i * 0.06}
              y={20}
              tabIndex={0}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-current={isActive ? 'true' : undefined}
              className="relative grid cursor-pointer grid-cols-[48px_1fr] border-t border-line px-4 py-7 outline-none focus-visible:ring-2 focus-visible:ring-brand/60 lg:min-h-[190px] lg:cursor-default lg:grid-cols-[100px_448px_1fr_372px] lg:px-7 lg:py-[27px]"
            >
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-white/[0.03]"
                initial={false}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
              {/* lime accent that grows down the left edge of the active row */}
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-full w-px origin-top bg-lime"
                initial={false}
                animate={{ scaleY: isActive ? 1 : 0 }}
                transition={{ duration: 0.6, ease }}
              />
              {/* plus / minus toggle hint on touch layouts */}
              <span aria-hidden="true" className="absolute right-4 top-[42px] h-4 w-4 lg:hidden">
                <span className={`absolute left-0 top-1/2 h-px w-4 transition-colors duration-500 ${isActive ? 'bg-lime' : 'bg-cream/50'}`} />
                <span
                  className={`absolute left-0 top-1/2 h-px w-4 transition-[transform,background-color] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
                    isActive ? 'rotate-0 bg-lime' : 'rotate-90 bg-cream/50'
                  }`}
                />
              </span>
              <span className={`relative pt-2 font-sans text-[15px] transition-colors duration-500 lg:pt-[18px] ${isActive ? 'text-lime' : 'text-muted'}`}>
                /0{i + 1}
              </span>
              <h3
                className={`relative pr-8 font-serif text-[36px] font-extralight leading-[1.16] transition-all lg:pr-0 duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:text-[46px] lg:text-[57px] ${
                  isActive ? 'text-cream lg:translate-x-3' : 'text-cream/60'
                }`}
              >
                {cap.title[0]}
                <br />
                {cap.title[1]}
              </h3>

              <div className="relative hidden pt-2 lg:block">
                <AnimatePresence mode="wait">{isActive && <Visual type={cap.visual} />}</AnimatePresence>
              </div>

              <div className="relative col-start-2 mt-4 lg:col-start-auto lg:mt-0 lg:pt-[18px]">
                <p className={`max-w-[372px] text-[17px] font-medium leading-[1.22] tracking-[-0.01em] transition-colors duration-500 lg:text-[20px] ${isActive ? 'text-sand' : 'text-sand/60'}`}>
                  {cap.body}
                </p>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      className="overflow-hidden lg:hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease }}
                    >
                      {/* side padding leaves room for the fanned-out creative cards */}
                      <div className="pb-2 pl-8 pt-5">
                        <Visual type={cap.visual} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
