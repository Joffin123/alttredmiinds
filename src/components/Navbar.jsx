'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from './Container';

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#process', label: 'Our Process' },
  { href: '#why-us', label: 'Why Us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 pt-5 sm:pt-7 lg:pt-9">
      <Container className="lg:px-3">
      <div className="nav-shadow flex h-[64px] items-center justify-between rounded-full border border-ink/[0.09] bg-white pl-4 pr-2 sm:pl-6 lg:h-[76px] lg:pl-10 lg:pr-[15px]">
        <a href="#" className="flex items-center">
          <Image
            src="/images/header-logo.png"
            alt="Alttred Miinds"
            width={300}
            height={74}
            priority
            className="h-6 w-auto sm:h-7 lg:h-[30px]"
          />
        </a>

        <nav className="hidden items-center gap-[30px] text-[14.5px] text-ink lg:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="group relative py-1 transition hover:text-brand">
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#cta"
            className="group hidden h-[46px] items-center gap-3 rounded-full bg-ink pl-[19px] pr-2.5 transition-all duration-300 hover:scale-[1.02] hover:opacity-95 active:scale-95 lg:flex"
          >
            <span className="text-sm font-medium text-white">Book a Call</span>
            <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-brand transition-transform duration-300 ease-out group-hover:scale-105">
              <svg width="8" height="10" viewBox="0 0 6 10" fill="none" className="transition-transform duration-300 ease-out group-hover:translate-x-[2px]">
                <path d="M1 1L4.573 4.246a.35.35 0 0 1 0 .508L1 9" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink transition hover:opacity-90 lg:hidden"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" className="transition-transform duration-300">
              {open ? (
                <path d="M1 1L17 13M17 1L1 13" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M1 1H17M1 7H17M1 13H17" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`grid transition-all duration-300 ease-out lg:hidden ${
          open ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="nav-shadow flex flex-col gap-1 rounded-3xl border border-ink/[0.09] bg-white p-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[15px] text-ink transition hover:bg-cream hover:text-brand"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-1 flex h-12 items-center justify-center rounded-full bg-ink text-sm font-medium text-white transition hover:opacity-90"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
      </Container>
    </header>
  );
}
