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
