'use client';

import Link from 'next/link';
import { useContactModal } from './ContactModal';

export function ArrowIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 17 17" fill="none" aria-hidden="true" className={className}>
      <path
        d="M14.302 9.026 9.802 13.526a.5.5 0 0 1-.707-.707l3.647-3.647H2.948a.5.5 0 0 1 0-1h9.794L9.095 4.526a.5.5 0 0 1 .707-.708l4.5 4.5a.5.5 0 0 1 0 .708Z"
        fill="currentColor"
      />
    </svg>
  );
}

// The ::before layer is a soft sheen that sweeps across on hover.
const base =
  'group relative isolate overflow-hidden before:absolute before:inset-y-0 before:-left-3/4 before:-z-10 before:w-1/2 before:skew-x-[-20deg] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-[left] before:duration-700 before:ease-out hover:before:left-[125%] inline-flex items-center justify-center gap-2 rounded-full bg-brand font-medium uppercase tracking-[0.06em] text-white shadow-[0_0_0_0_rgba(53,162,49,0.5)] transition-all duration-300 hover:bg-brand-hover hover:shadow-[0_8px_30px_-6px_rgba(53,162,49,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand active:scale-[0.98]';

const sizes = {
  md: 'px-[22px] py-[13px] text-[13px]',
  lg: 'px-[34px] py-[15px] text-[14.5px]',
};

/** Green pill CTA. Opens the strategy-call modal unless given an href. */
export default function Button({ children, href, size = 'lg', arrow = true, className = '', onClick, ...rest }) {
  const { open } = useContactModal();
  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowIcon className="h-[17px] w-[17px] transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${base} ${sizes[size]} ${className}`} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={`${base} ${sizes[size]} ${className}`}
      onClick={(e) => {
        onClick?.(e);
        open();
      }}
      {...rest}
    >
      {content}
    </button>
  );
}
