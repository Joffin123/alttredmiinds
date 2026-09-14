'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { ease } from './motion';

const ContactContext = createContext({ open: () => {}, close: () => {} });

export function useContactModal() {
  return useContext(ContactContext);
}

export function ContactProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const lastFocus = useRef(null);
  const dialogRef = useRef(null);

  const open = useCallback(() => {
    lastFocus.current = document.activeElement;
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) {
      lastFocus.current?.focus?.();
      return;
    }
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => dialogRef.current?.querySelector('input')?.focus(), 350);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      clearTimeout(t);
    };
  }, [isOpen]);

  return (
    <ContactContext.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
              onClick={close}
            />
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              className="relative max-h-[92vh] w-full max-w-[560px] overflow-y-auto rounded-t-3xl border border-line bg-panel p-6 shadow-2xl sm:rounded-3xl sm:p-9"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease }}
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close dialog"
                className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:border-cream/40 hover:text-cream"
              >
                <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M1 1l12 12M13 1 1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
              <p className="mb-2 text-[12px] uppercase tracking-[0.14em] text-brand">Request a strategy call</p>
              <h2 id="contact-modal-title" className="heading-xl mb-2 pr-10 text-[34px] sm:text-[40px]">
                Let&apos;s talk growth.
              </h2>
              <p className="mb-7 text-[15px] text-muted">
                Tell us where you are and where you want to be. We reply within one business day.
              </p>
              <ContactForm compact onDone={close} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ContactContext.Provider>
  );
}
