/*
 'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '@/data/site';
import { ease } from './motion';

const themes = {
  cream: { card: 'bg-cream text-ink', label: 'text-ink', bar: 'bg-ink' },
  stone: { card: 'bg-stone text-ink', label: 'text-ink', bar: 'bg-ink' },
  dark: { card: 'bg-panel text-cream border border-line', label: 'text-sand', bar: 'bg-cream' },
  blue: {
    card: 'text-cream bg-[linear-gradient(180deg,#1b74f6_0%,#0d52e0_55%,#0944d4_100%)]',
    label: 'text-cream',
    bar: 'bg-cream',
  },
};

const smallBars = [35, 67, 71, 104, 108, 141, 145];
const blueBars = [107, 178, 141, 118, 155, 188, 135, 171, 200, 145, 114, 165, 127, 94];


function CountUp({ value, start }) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const [display, setDisplay] = useState(match ? `0${match[2]}` : value);

  useEffect(() => {
    if (!match || !start) return;
    const target = parseFloat(match[1]);
    const decimals = (match[1].split('.')[1] || '').length;
    let raf;
    let t0;
    const tick = (now) => {
      t0 ??= now;
      const p = Math.min(1, (now - t0) / 1600);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${(target * eased).toFixed(decimals)}${match[2]}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, value]);

  return <>{display}</>;
}

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const t = themes[stat.theme];
  const isBlue = stat.theme === 'blue';
  const isDark = stat.theme === 'dark';
  // Below lg the dark and blue cards span the full row, so the two short cards can sit side by side.
  const wide = isBlue || isDark;
  const bars = isBlue ? blueBars : smallBars.slice(0, isDark ? 7 : 5);
  const barScale = isBlue ? 0.72 : isDark ? 0.9 : 0.75;

  return (
    <motion.div
      ref={ref}
      style={{ '--h': `${stat.height}px` }}
      className={`group relative overflow-hidden rounded-[24px] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] lg:h-[var(--h)] lg:min-h-0 lg:hover:-translate-y-2 lg:[--m:1] ${
        isBlue
          ? 'col-span-2 min-h-[290px] [--m:0.72] lg:w-[370px]'
          : isDark
            ? 'col-span-2 min-h-[236px] [--m:0.6] lg:w-[265px]'
            : 'col-span-1 min-h-[210px] [--m:0.8] lg:w-[265px]'
      } ${t.card}`}
      initial={{ clipPath: 'inset(100% 0% 0% 0% round 24px)', opacity: 0 }}
      animate={inView ? { clipPath: 'inset(0% 0% 0% 0% round 24px)', opacity: 1 } : {}}
      transition={{ duration: 1.1, delay: index * 0.14, ease }}
    >
      {isBlue && (
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(110deg,transparent_0_76px,rgba(249,245,239,0.08)_76px_77px)]" />
      )}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.14] to-transparent"
        initial={{ x: '0%' }}
        animate={inView ? { x: '400%' } : {}}
        transition={{ duration: 1.4, delay: index * 0.14 + 0.9, ease: 'easeInOut' }}
      />

      <div className={`relative ${wide ? 'p-6' : 'p-5 lg:p-6'}`}>
        <p
          className={`whitespace-nowrap font-display font-semibold leading-none tracking-[-0.03em] ${
            isBlue ? 'text-[56px] sm:text-[64px] lg:text-[94px]' : wide ? 'text-[44px] lg:text-[65px]' : 'text-[30px] min-[400px]:text-[34px] sm:text-[46px] lg:text-[65px]'
          }`}
        >
          <CountUp value={stat.value} start={inView} />
        </p>
        <p
          className={`mt-2 max-w-[220px] font-display font-medium leading-[1.08] ${
            isBlue ? 'text-[23px] lg:text-[29px]' : wide ? 'text-[18px] lg:text-[23px]' : 'text-[16px] sm:text-[18px] lg:text-[23px]'
          } ${t.label}`}
        >
          {stat.label}
        </p>
      </div>

      <div
        className={`absolute flex items-end justify-between lg:right-auto lg:justify-start ${
          isBlue ? 'bottom-[34px] left-[25px] right-[25px] lg:gap-[20.4px]' : `bottom-[28px] left-[23px] lg:gap-[22.4px] ${isDark ? 'right-auto gap-[22.4px]' : 'right-[23px]'}`
        }`}
        aria-hidden="true"
      >
        {bars.map((h, i) => (
          <motion.span
            key={i}
            className="block origin-bottom"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.9, delay: index * 0.14 + 0.5 + i * 0.05, ease }}
          >
            <motion.span
              className={`block w-[8px] origin-bottom rounded-full ${t.bar}`}
              style={{
                height: `calc(${h * barScale}px * var(--m))`,
                opacity: isBlue ? 0.9 : 0.16 + i * 0.035,
              }}
              animate={isBlue && inView ? { scaleY: [1, 0.7 + ((i * 7) % 5) * 0.05, 1] } : undefined}
              transition={isBlue ? { duration: 2.2 + (i % 4) * 0.35, repeat: Infinity, ease: 'easeInOut', delay: 1.6 + i * 0.07 } : undefined}
            />
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section aria-label="Results in numbers" className="container-site mt-20 lg:mt-[98px]">
      <div className="grid grid-cols-2 gap-4 lg:flex lg:items-end lg:justify-center lg:gap-6">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  );
}
*/


'use client';

import { useEffect, useRef, useState } from 'react';

import { motion, useInView } from 'framer-motion';

import { stats } from '@/data/site';

import { ease } from './motion';

const themes = {

  cream: { card: 'bg-cream text-ink', label: 'text-ink', bar: 'bg-ink' },

  stone: { card: 'bg-stone text-ink', label: 'text-ink', bar: 'bg-ink' },

  dark: { card: 'bg-panel text-cream border border-line', label: 'text-sand', bar: 'bg-cream' },

  blue: {

    card: 'text-cream bg-[linear-gradient(180deg,#1b74f6_0%,#0d52e0_55%,#0944d4_100%)]',

    label: 'text-cream',

    bar: 'bg-cream',

  },

};

const smallBars = [35, 67, 71, 104, 108, 141, 145];

const blueBars = [107, 178, 141, 118, 155, 188, 135, 171, 200, 145, 114, 165, 127, 94];


function CountUp({ value, start, duration = 1600 }) {

  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);

  const [display, setDisplay] = useState(match ? `0${match[2]}` : value);

  useEffect(() => {

    if (!match || !start) return;

    const target = parseFloat(match[1]);

    const decimals = (match[1].split('.')[1] || '').length;

    let raf;

    let t0;

    const tick = (now) => {

      t0 ??= now;

      const p = Math.min(1, (now - t0) / duration);

      const eased = 1 - Math.pow(1 - p, 3);

      setDisplay(`${(target * eased).toFixed(decimals)}${match[2]}`);

      if (p < 1) raf = requestAnimationFrame(tick);

    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);

  }, [start, value, duration]);

  return <>{display}</>;

}


function StatCard({ stat, index }) {

  const ref = useRef(null);

  const inView = useInView(ref, { once: true, margin: '-80px' });

  const t = themes[stat.theme];

  const isBlue = stat.theme === 'blue';

  const isDark = stat.theme === 'dark';

  // Mobile animation only

  const isMobile =
    typeof window !== 'undefined' && window.innerWidth < 1024;

  const shouldAnimate = isMobile ? true : inView;

  // Below lg the dark and blue cards span the full row, so the two short cards can sit side by side.

  const wide = isBlue || isDark;

  const bars = isBlue ? blueBars : smallBars.slice(0, isDark ? 7 : 5);

  const barScale = isBlue ? 0.72 : isDark ? 0.9 : 0.75;

  return (

    <motion.div

      ref={ref}

      style={{ '--h': `${stat.height}px` }}

      className={`group relative overflow-hidden rounded-[24px] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] lg:h-[var(--h)] lg:min-h-0 lg:hover:-translate-y-2 lg:[--m:1] ${
        isBlue

          ? 'col-span-2 min-h-[290px] [--m:0.72] lg:w-[370px]'

          : isDark

            ? 'col-span-2 min-h-[236px] [--m:0.6] lg:w-[265px]'

            : 'col-span-1 min-h-[210px] [--m:0.8] lg:w-[265px]'

      } ${t.card}`}

      initial={{ clipPath: 'inset(100% 0% 0% 0% round 24px)', opacity: 0 }}

      animate={shouldAnimate ? { clipPath: 'inset(0% 0% 0% 0% round 24px)', opacity: 1 } : {}}

      transition={{
        duration: isMobile ? 0.5 : 1.1,
        delay: isMobile ? 0 : index * 0.14,
        ease
      }}

    >

      {isBlue && (

        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(110deg,transparent_0_76px,rgba(249,245,239,0.08)_76px_77px)]" />

      )}

      {/* soft light sweep once the card has been revealed */}

      <motion.div

        aria-hidden="true"

        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.14] to-transparent"

        initial={{ x: '0%' }}

        animate={shouldAnimate ? { x: '400%' } : {}}

        transition={{
          duration: isMobile ? 0.6 : 1.4,
          delay: isMobile ? 0 : index * 0.14 + 0.9,
          ease: 'easeInOut'
        }}

      />

      <div className={`relative ${wide ? 'p-6' : 'p-5 lg:p-6'}`}>

        <p

          className={`whitespace-nowrap font-display font-semibold leading-none tracking-[-0.03em] ${
            isBlue ? 'text-[56px] sm:text-[64px] lg:text-[94px]' : wide ? 'text-[44px] lg:text-[65px]' : 'text-[30px] min-[400px]:text-[34px] sm:text-[46px] lg:text-[65px]'

          }`}

        >

          <CountUp
            value={stat.value}
            start={shouldAnimate}
            duration={isMobile ? 900 : 1600}
          />

        </p>

        <p

          className={`mt-2 max-w-[220px] font-display font-medium leading-[1.08] ${
            isBlue ? 'text-[23px] lg:text-[29px]' : wide ? 'text-[18px] lg:text-[23px]' : 'text-[16px] sm:text-[18px] lg:text-[23px]'

          } ${t.label}`}

        >

          {stat.label}

        </p>

      </div>

      <div

        className={`absolute flex items-end justify-between lg:right-auto lg:justify-start ${
          isBlue ? 'bottom-[34px] left-[25px] right-[25px] lg:gap-[20.4px]' : `bottom-[28px] left-[23px] lg:gap-[22.4px] ${isDark ? 'right-auto gap-[22.4px]' : 'right-[23px]'}`

        }`}

        aria-hidden="true"

      >

        {bars.map((h, i) => (

          <motion.span

            key={i}

            className="block origin-bottom"

            initial={{ scaleY: 0 }}

            animate={shouldAnimate ? { scaleY: 1 } : {}}

            transition={{
              duration: isMobile ? 0.5 : 0.9,
              delay: isMobile ? 0 : index * 0.14 + 0.5 + i * 0.05,
              ease
            }}

          >

            <motion.span

              className={`block w-[8px] origin-bottom rounded-full ${t.bar}`}

              style={{

                height: `calc(${h * barScale}px * var(--m))`,

                opacity: isBlue ? 0.9 : 0.16 + i * 0.035,

              }}

              animate={isBlue && shouldAnimate ? { scaleY: [1, 0.7 + ((i * 7) % 5) * 0.05, 1] } : undefined}

              transition={
                isBlue
                  ? {
                      duration: isMobile
                        ? 1.8 + (i % 4) * 0.25
                        : 2.2 + (i % 4) * 0.35,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: isMobile
                        ? i * 0.03
                        : 1.6 + i * 0.07
                    }
                  : undefined
              }

            />

          </motion.span>

        ))}

      </div>

    </motion.div>

  );

}


export default function Stats() {

  return (

    <section aria-label="Results in numbers" className="container-site mt-20 lg:mt-[98px]">

      <div className="grid grid-cols-2 gap-4 lg:flex lg:items-end lg:justify-center lg:gap-6">

        {stats.map((stat, i) => (

          <StatCard key={stat.label} stat={stat} index={i} />

        ))}

      </div>

    </section>

  );

}
