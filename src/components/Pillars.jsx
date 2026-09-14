'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { pillars } from '@/data/site';
import { WordReveal, ease } from './motion';

export default function Pillars() {
  return (
    <section aria-labelledby="pillars-title" className="container-site pt-24 lg:pt-[78px]">
      <WordReveal
        as="h2"
        lines={['Not An Agency.', 'An Obsession With Your P&L.']}
        className="heading-xl text-center text-[40px] leading-[1.25] sm:text-[52px] lg:text-[66px]"
      />
      <span id="pillars-title" className="sr-only">
        Not an agency. An obsession with your P&amp;L.
      </span>

      <div className="mx-auto mt-14 grid max-w-[1276px] gap-5 md:grid-cols-3 lg:mt-[80px] lg:gap-[21px]">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: i * 0.12, ease }}
          >
            <article
              style={{ '--glow': p.glow }}
              className="group relative h-[300px] overflow-hidden border border-white/80 transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2 hover:scale-[1.015] hover:border-white hover:shadow-[0_28px_70px_-18px_var(--glow)] lg:h-[326px]"
            >
              {/* image settles from a slight zoom as the card enters */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.6, delay: i * 0.12, ease }}
              >
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25 transition-opacity duration-500 group-hover:opacity-60" />
              <h3 className="absolute left-6 top-6 max-w-[250px] text-[21px] leading-[1.35] text-cream lg:text-[22px]">{p.title}</h3>
              <p className="absolute inset-x-5 bottom-5 text-[15.5px] leading-[1.38] text-cream lg:text-[16.8px]">{p.body}</p>
            </article>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
