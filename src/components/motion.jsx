'use client';

import { motion } from 'framer-motion';

export const ease = [0.22, 1, 0.36, 1];

/** Fades and lifts children into view once. */
export function Reveal({ children, delay = 0, y = 28, className, as = 'div', ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Splits lines into words that slide up from a mask.
 * `lines` is an array of strings or of arrays of { text, className } segments.
 */
export function WordReveal({ lines, className, as = 'h2', delay = 0, stagger = 0.045, immediate = false, ...rest }) {
  const Tag = motion[as];
  let wordIndex = 0;

  const trigger = immediate
    ? { initial: 'hidden', animate: 'show' }
    : { initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '-60px' } };

  return (
    <Tag className={className} {...trigger} {...rest}>
      {lines.map((line, li) => {
        const segments = typeof line === 'string' ? [{ text: line }] : line;
        return (
          <span key={li} className="block">
            {segments.map((seg, si) =>
              seg.text
                .split(' ')
                .filter(Boolean)
                .map((word, wi) => {
                  const i = wordIndex++;
                  return (
                    <span key={`${si}-${wi}`} className="inline-block overflow-hidden pb-[0.12em] align-top -mb-[0.12em]">
                      <motion.span
                        className={`inline-block ${seg.className ?? ''}`}
                        variants={{
                          hidden: { y: '110%', opacity: 0 },
                          show: {
                            y: '0%',
                            opacity: 1,
                            transition: { duration: 0.9, ease, delay: delay + i * stagger },
                          },
                        }}
                      >
                        {word}
                        {' '}
                      </motion.span>
                    </span>
                  );
                })
            )}
          </span>
        );
      })}
    </Tag>
  );
}
