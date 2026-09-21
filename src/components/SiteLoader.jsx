'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import Dial from './Dial';
import { markSiteReady } from './siteReady';

const ease = [0.22, 1, 0.36, 1];
const MIN_MS = 650; // always show long enough to read as intentional
const MAX_MS = 1800; // never hold the page hostage to a slow asset
const RING = 243; // progress ring radius, sitting on one of the dial's own rings

const mask = 'radial-gradient(circle, #000 35%, transparent 70%)';

/** Full-screen intro: the hero dial spinning around the logo, with a circular progress ring and counter. */
export default function SiteLoader() {
  const [visible, setVisible] = useState(true);
  const ringRef = useRef(null);
  const headRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const min = reduced ? 400 : MIN_MS;
    // Ready means "the page is worth looking at": markup parsed and webfonts
    // resolved. Waiting on `load` would also wait on every below-the-fold
    // image, which kept the overlay — and the nav under it — up for seconds.
    let loaded = false;
    const onLoad = () => (loaded = true);
    const domReady =
      document.readyState === 'loading'
        ? new Promise((r) => document.addEventListener('DOMContentLoaded', r, { once: true }))
        : Promise.resolve();
    Promise.all([domReady, document.fonts?.ready]).then(onLoad, onLoad);

    const root = document.documentElement;
    root.style.overflow = 'hidden';

    let raf;
    let t0;
    let shown = 0;
    let done;
    let finished = false;

    const render = () => {
      ringRef.current.style.strokeDashoffset = `${100 - shown}`;
      headRef.current.setAttribute('transform', `rotate(${shown * 3.6})`);
      headRef.current.style.opacity = shown > 1 ? '1' : '0';
    };

    const finish = () => {
      if (finished) return;
      finished = true;
      cancelAnimationFrame(raf);
      clearTimeout(failsafe);
      shown = 100;
      render();
      done = setTimeout(() => {
        root.style.overflow = '';
        markSiteReady();
        setVisible(false);
      }, 120);
    };

    const tick = (now) => {
      t0 ??= now;
      const elapsed = now - t0;
      const canFinish = elapsed >= min && (loaded || elapsed >= MAX_MS);
      // creep toward 90% while waiting, then run to 100 once the page is ready
      const target = canFinish ? 100 : 90 * (1 - Math.pow(1 - Math.min(1, elapsed / min), 3));
      shown += (target - shown) * 0.14;
      if (canFinish && shown > 99.5) return finish();
      render();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    // Animation frames pause in background tabs; a timer guarantees the site is never left covered.
    const failsafe = setTimeout(finish, MAX_MS + 500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(failsafe);
      clearTimeout(done);
      root.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="site-loader"
          role="status"
          aria-label="Loading Alttred Miinds"
          className="fixed inset-0 z-[200] grid place-items-center overflow-hidden bg-ink"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '61px 53.4px',
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        >
          {/* the dial zooms out toward the viewer as the page underneath is revealed */}
          <motion.div
            className="relative h-[100vw] w-[100vw] max-h-[620px] max-w-[620px] shrink-0 sm:h-[760px] sm:w-[760px]"
            style={{ maskImage: mask, WebkitMaskImage: mask }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 1, ease }}
          >
            <Dial outerSpin={22} innerSpin={16}>
              <defs>
                {/* soft grey, in the same family as the dial's own rings */}
                <linearGradient id="loader-ring" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#dbd8d0" stopOpacity="0.25" />
                  <stop offset="1" stopColor="#dbd8d0" stopOpacity="0.8" />
                </linearGradient>
                <filter id="loader-glow" x="-200%" y="-200%" width="500%" height="500%">
                  <feGaussianBlur stdDeviation="8" />
                </filter>
              </defs>
              <circle r={RING} fill="none" stroke="#fff" strokeOpacity="0.07" strokeWidth="4" />
              <circle
                ref={ringRef}
                r={RING}
                fill="none"
                stroke="url(#loader-ring)"
                strokeWidth="5"
                strokeLinecap="round"
                pathLength="100"
                strokeDasharray="100"
                transform="rotate(-90)"
                style={{ strokeDashoffset: 100 }}
              />
              {/* glowing point riding the head of the progress arc */}
              <g ref={headRef} style={{ opacity: 0 }}>
                <circle cy={-RING} r="20" fill="#fff" opacity="0.3" filter="url(#loader-glow)" />
                <circle cy={-RING} r="8" fill="#0c0c0b" stroke="#dbd8d0" strokeWidth="3" />
              </g>
            </Dial>
          </motion.div>

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            {/* just the diamond mark: the icon is the left 70×70px of the logo image, so crop the rest away */}
            <span className="block h-[40px] w-[39.4px] overflow-hidden sm:h-[46px] sm:w-[45.3px]">
              <Image src="/images/logo.png" alt="" width={289} height={71} priority className="h-full w-auto max-w-none" />
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
