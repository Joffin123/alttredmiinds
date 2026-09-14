'use client';

import { useSyncExternalStore } from 'react';

// Tiny shared flag flipped by the site loader as it lifts, so intro animations
// wait for it instead of playing unseen underneath the overlay.
let ready = false;
const listeners = new Set();

export function markSiteReady() {
  if (ready) return;
  ready = true;
  listeners.forEach((l) => l());
}

const subscribe = (l) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export function useSiteReady() {
  return useSyncExternalStore(subscribe, () => ready, () => false);
}
