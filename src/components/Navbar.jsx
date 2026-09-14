'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '@/data/site';
import Button from './Button';
import { ease } from './motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hash, setHash] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track which section is on screen so the matching link lights up.
  useEffect(() => {
    if (pathname !== '/') return setHash('');
    const ids = navLinks.map((l) => l.href.split('#')[1]).filter(Boolean);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setHash(visible.target.id);
        else if (window.scrollY < 400) setHash('');
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.2, 0.5] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const isActive = (href) => {
    const [path, id] = href.split('#');
    if (id) return pathname === '/' && hash === id;
    if (href === '/') return pathname === '/' && !hash;
    return pathname === path;
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || menuOpen ? 'border-b border-line/60 bg-ink/75 backdrop-blur-xl' : 'border-b border-transparent'
        }`}
      >
        <div className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-[height] duration-500 sm:px-8 lg:px-[70px] ${scrolled ? 'h-[72px]' : 'h-[88px] lg:h-[128px]'}`}>
          <Link href="/" aria-label="Alttred Miinds home" className="relative z-10 shrink-0" onClick={() => setMenuOpen(false)}>
            <Image src="/images/logo.png" alt="Alttred Miinds" width={289} height={71} priority className="h-[28px] w-auto lg:h-[34px]" />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center p-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="relative flex h-8 items-center rounded-full px-4 text-xs uppercase tracking-[0.08em] text-cream transition-colors duration-300"
                  >
                    {isActive(link.href) && (
                      <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-[#514e4b]/60" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                    )}
                    <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-cream/60 after:transition-transform after:duration-300 hover:after:scale-x-100">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button size="md" arrow={false} className="hidden sm:inline-flex">
              Request a Strategy Call
            </Button>
            <button
              type="button"
              className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 top-0 h-[1.5px] w-5 bg-cream transition duration-300 ${menuOpen ? 'translate-y-[5.5px] rotate-45' : ''}`} />
                <span className={`absolute bottom-0 left-0 h-[1.5px] w-5 bg-cream transition duration-300 ${menuOpen ? '-translate-y-[5.5px] -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-ink/95 px-5 pb-10 pt-28 backdrop-blur-xl sm:px-8 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav aria-label="Mobile" className="flex-1">
              <ul className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.5, ease }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-baseline justify-between border-b border-line py-4 font-serif text-[38px] font-light leading-none"
                    >
                      {link.label}
                      <span className="font-mono text-xs text-muted">/0{i + 1}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Button className="w-full" onClick={() => setMenuOpen(false)}>
                Request a Strategy Call
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
