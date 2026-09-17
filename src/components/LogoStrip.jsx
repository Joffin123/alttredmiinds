/*
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { clientLogos } from '@/data/site';
import { ease } from './motion';

const cell = 'flex h-[66px] items-center justify-center border-l border-t border-dashed border-line px-4';

function Logo({ logo, i }) {
  return (
    <motion.li
      className={`${cell} group`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay: 0.05 * i, ease }}
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={Math.round(logo.w / 4)}
        height={Math.round(logo.h / 4)}
        unoptimized
        className="max-w-full opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
      />
    </motion.li>
  );
}

export default function LogoStrip() {
  const { rowOneLeft, rowOneRight, rowTwo } = clientLogos;
  let i = 0;

  return (
    <section aria-label="Brands we work with" className="relative border-y border-line bg-ink/60">
      <div className="mx-auto max-w-[1440px] overflow-hidden">
        <ul className="-ml-px -mt-px grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6">
          {rowOneLeft.map((logo) => (
            <Logo key={logo.name} logo={logo} i={i++} />
          ))}
          <li className={`${cell} order-first col-span-full text-center lg:order-none lg:col-span-2 lg:col-start-3 lg:row-start-1`}>
            <p className="text-[13px] uppercase tracking-[0.08em] sm:text-[14.4px]">
              <span className="text-muted">The Brands Who Bet On Us.</span> <span className="text-white">And Won.</span>
            </p>
          </li>
          {rowOneRight.map((logo) => (
            <Logo key={logo.name} logo={logo} i={i++} />
          ))}
          {rowTwo.map((logo) => (
            <Logo key={logo.name} logo={logo} i={i++} />
          ))}
        </ul>
      </div>
    </section>
  );
}
*/

'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { clientLogos } from '@/data/site';
import { ease } from './motion';

const cell =
  'flex h-[100px] items-center justify-center border-l border-t border-dashed border-line px-4';


const GRID_COLS = 4;

const FADE_DURATION = 0.9;
const STEP_DELAY = 0.35;
const HOLD = 500;

function LogoCell({ wave, index, getLogos }) {
  const row = Math.floor(index / GRID_COLS);
  const col = index % GRID_COLS;
 
  const delay = (row + col) * STEP_DELAY;
  const [displayWave, setDisplayWave] = useState(wave);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayWave(wave);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [wave, delay]);

  const logo = getLogos(displayWave)[index];

  return (
    <li className={`${cell} relative overflow-hidden`}>
      {/* mode="wait" = old logo fully fades out before the new one
          starts fading in, so they never overlap on screen */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={logo.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_DURATION, ease }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={Math.round(logo.w / 4)}
            height={Math.round(logo.h / 4)}
            unoptimized
            className="max-w-full max-h-[55px] w-auto h-auto opacity-90"
          />
        </motion.div>
      </AnimatePresence>
    </li>
  );
}

export default function LogoStrip() {
  const allLogos = useMemo(
    () => [
      ...clientLogos.rowOne,
      ...clientLogos.rowTwo,
      ...clientLogos.rowThree,
      ...clientLogos.rowFour,
    ],
    []
  );

  // 4 columns × 3 rows = 12 logos
  const visibleCount = 12;

  const getLogos = (waveNumber) => {
    const start = (waveNumber % 2) * visibleCount;
    return allLogos.slice(start, start + visibleCount);
  };

  const [wave, setWave] = useState(0);

  useEffect(() => {
    let timeout;

    const rows = Math.ceil(visibleCount / GRID_COLS);
    const maxDelay = (rows - 1 + (GRID_COLS - 1)) * STEP_DELAY;
    const sweepDuration = (maxDelay + FADE_DURATION * 2) * 1000;

    const loop = () => {
      setWave((w) => w + 1);
      timeout = setTimeout(loop, HOLD + sweepDuration);
    };
    timeout = setTimeout(loop, HOLD);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      aria-label="Brands we work with"
      className="relative border-y border-line bg-ink/60"
    >
      <div className="w-full overflow-hidden">
        <ul className="-ml-px -mt-px grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: visibleCount }).map((_, index) => (
            <LogoCell
              key={index}
              wave={wave}
              index={index}
              getLogos={getLogos}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}