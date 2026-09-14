'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { industries } from '@/data/site';
import { Reveal, WordReveal, ease } from './motion';

export default function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section id="industries" aria-labelledby="industries-title" className="container-site pt-28 lg:pt-[91px]">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <WordReveal lines={['Where We Play (And Win)']} className="heading-xl text-[36px] sm:text-[48px] lg:text-[56px]" />
        <Reveal as="p" delay={0.2} className="max-w-[600px] text-[17px] leading-[1.55] text-muted lg:mt-3 lg:text-[19px]">
          We don&apos;t spread thin across every industry. We go deep in three, because mastery beats mediocrity.
        </Reveal>
      </div>
      <span id="industries-title" className="sr-only">
        Industries we specialise in
      </span>

      <motion.div
        className="mt-10 h-px origin-left bg-line lg:mt-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease }}
      />

      <div className="mt-9 flex flex-col gap-3 lg:h-[496px] lg:flex-row" onMouseLeave={() => setActive(0)}>
        {industries.map((ind, i) => {
          const isActive = active === i;
          return (
            <motion.article
              key={ind.id}
              id={ind.id}
              tabIndex={0}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: i * 0.12, ease }}
              style={{ flexGrow: isActive ? 1.75 : 1 }}
              className="group relative h-[420px] scroll-mt-28 overflow-hidden border border-line bg-ink outline-none transition-[flex-grow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] focus-visible:ring-2 focus-visible:ring-brand lg:h-full lg:basis-0"
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.6, delay: i * 0.12, ease }}
              >
                <Image
                  src={ind.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className={`object-cover transition-[transform,filter] duration-700 ease-[cubic-bezier(.22,1,.36,1)] max-lg:scale-100 max-lg:brightness-100 ${
                    isActive ? 'scale-105 brightness-100' : 'scale-100 brightness-[0.7] lg:grayscale'
                  }`}
                />
              </motion.div>
              <div className="absolute inset-0 bg-ink/[0.08]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.12)_48%,rgba(0,0,0,0.9)_100%)]" />

              <p className="absolute left-[21px] top-[19px] font-mono text-[10px] tracking-[0.04em] text-sand">
                0{i + 1} / 0{industries.length}
              </p>

              <div className="absolute inset-x-[21px] bottom-[22px]">
                <h3 className="whitespace-nowrap font-serif text-[30px] font-light leading-[1.35] text-cream lg:text-[33px]">{ind.title}</h3>
                <p className="mt-2 max-w-[560px] text-[13.6px] leading-[1.4] text-sand">{ind.body}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
