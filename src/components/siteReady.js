'use client';

import { useSyncExternalStore } from 'react';

// Tiny shared flag flipped by the site loader as it lifts, so intro animations
// wait for it instead of playing unseen underneath the overlay.
let ready = false;
let timer;
const listeners = new Set();

export function markSiteReady() {
  if (ready) return;
  ready = true;
  clearTimeout(timer);
  listeners.forEach((l) => l());
}

const subscribe = (l) => {
  listeners.add(l);
  // Safety net: if the loader is missing or its effect never runs, content
  // gated on this flag must still reveal itself rather than stay invisible.
  if (!ready && !timer) timer = setTimeout(markSiteReady, 2500);
  return () => listeners.delete(l);
};

export function useSiteReady() {
  return useSyncExternalStore(subscribe, () => ready, () => false);
}
