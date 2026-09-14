'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimationControls, useInView } from 'framer-motion';
import { testimonials } from '@/data/site';
import { ArrowIcon } from './Button';
import { WordReveal } from './motion';

const GAP = 7;
const TRACK = 170;

function Card({ t, active, onSelect }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active) v.play().catch(() => {});
    else v.pause();
  }, [active]);

  const dark = t.type === 'color';
  const text = dark ? 'text-[#1e1e1e]' : 'text-white';

  return (
    <motion.li
      className="relative h-[349px] w-[260px] shrink-0 cursor-grab select-none overflow-hidden rounded-[7px] bg-[#303035] active:cursor-grabbing sm:w-[280px]"
      style={dark ? { backgroundColor: t.color } : undefined}
      animate={{ scale: active ? 1 : 0.965, opacity: active ? 1 : 0.72 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={onSelect}
      aria-roledescription="slide"
      aria-label={`${t.name}, ${t.role}`}
    >
      {!dark && (
        <>
          {t.video ? (
            <video ref={videoRef} src={t.video} poster={t.image} muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <Image src={t.image} alt="" fill sizes="280px" draggable={false} className="pointer-events-none object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/0" />
        </>
      )}

      {dark && (
        <div className="absolute inset-x-0 top-0 grid h-[178px] place-items-center p-5">
          {t.logo ? (
            <Image src={t.logo} alt="" width={130} height={40} draggable={false} className="pointer-events-none h-auto max-h-[40px] w-auto max-w-[130px] opacity-60 mix-blend-multiply" />
          ) : (
            <span className="font-serif text-[21px] tracking-[0.02em] text-[#1e1e1e]/55">{t.wordmark}</span>
          )}
        </div>
      )}

      <span className={`absolute right-5 top-5 text-[9px] font-semibold uppercase tracking-[0.08em] ${text}`}>{t.tag}</span>

      <figure className="absolute inset-x-0 bottom-0 p-5">
        <blockquote className={`text-[16.4px] font-medium leading-[1.3] ${text}`}>{t.quote}</blockquote>
        <figcaption className="mt-3">
          <span className={`block text-[13px] font-medium ${text}`}>{t.name}</span>
          <span className={`block text-[11.5px] ${dark ? 'text-[#1e1e1e]/60' : 'text-white/60'}`}>{t.role}</span>
        </figcaption>
      </figure>
    </motion.li>
  );
}

export default function Testimonials() {
  const n = testimonials.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [step, setStep] = useState(287);
  const controls = useAnimationControls();
  const sectionRef = useRef(null);
  const firstCard = useRef(null);
  const dragging = useRef(false);
  const inView = useInView(sectionRef, { margin: '-20%' });

  const go = useCallback((i) => setIndex(((i % n) + n) % n), [n]);

  useEffect(() => {
    const measure = () => {
      const card = firstCard.current?.querySelector('li');
      if (card) setStep(card.offsetWidth + GAP);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    controls.start({ x: -index * step, transition: { type: 'spring', stiffness: 220, damping: 32 } });
  }, [index, step, controls]);

  useEffect(() => {
    if (paused || !inView) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % n), 4500);
    return () => clearInterval(t);
  }, [paused, inView, n]);

  const onDragEnd = (_, info) => {
    const { offset, velocity } = info;
    let next = index;
    if (offset.x < -step / 4 || velocity.x < -400) next = Math.min(n - 1, index + Math.max(1, Math.round(-offset.x / step)));
    else if (offset.x > step / 4 || velocity.x > 400) next = Math.max(0, index - Math.max(1, Math.round(offset.x / step)));
    if (next === index) controls.start({ x: -index * step });
    setIndex(next);
    setTimeout(() => (dragging.current = false), 50);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      className="overflow-hidden pt-28 lg:pt-[74px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="container-site lg:pl-[5px]">
        <div className="flex items-end justify-between gap-6">
          <WordReveal
            lines={[
              [{ text: 'Don’t just take it from us', className: 'text-white' }],
              [
                { text: 'Here’s what our', className: 'text-slate' },
                { text: 'Clients have to say', className: 'text-white' },
              ],
            ]}
            className="heading-xl text-[34px] leading-[1.22] sm:text-[46px] lg:text-[55px]"
          />
          <div className="hidden shrink-0 gap-2 pb-3 md:flex">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(index - 1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-line text-cream transition hover:border-cream/50 hover:bg-white/5"
            >
              <ArrowIcon className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(index + 1)}
              className="grid h-12 w-12 place-items-center rounded-full border border-line text-cream transition hover:border-cream/50 hover:bg-white/5"
            >
              <ArrowIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 lg:mt-[33px]" ref={firstCard}>
          <motion.ul
            className="flex touch-pan-y"
            style={{ gap: GAP }}
            drag="x"
            dragConstraints={{ left: -(n - 1) * step, right: 0 }}
            dragElastic={0.12}
            animate={controls}
            onDragStart={() => (dragging.current = true)}
            onDragEnd={onDragEnd}
            aria-live={paused ? 'polite' : 'off'}
          >
            {testimonials.map((t, i) => (
              <Card key={i} t={t} active={i === index} onSelect={() => !dragging.current && go(i)} />
            ))}
          </motion.ul>
        </div>

        <div className="relative mx-auto mt-14 flex h-1 rounded-full bg-white/25" style={{ width: TRACK }}>
          <motion.span
            className="absolute inset-y-0 left-0 rounded-full bg-white"
            style={{ width: TRACK / n }}
            animate={{ x: (index * TRACK) / n }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          />
          {testimonials.map((t, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show testimonial ${i + 1} of ${n}`}
              aria-current={i === index}
              className="relative -my-2 flex-1"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
