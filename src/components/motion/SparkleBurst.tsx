'use client';

import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function SparkleBurst() {
  const reduceMotion = usePrefersReducedMotion();

  if (reduceMotion) {
    return null;
  }

  return (
    <span className="pointer-events-none absolute inset-0" aria-hidden="true">
      <span className="sparkle-burst sparkle-burst-1" />
      <span className="sparkle-burst sparkle-burst-2" />
      <span className="sparkle-burst sparkle-burst-3" />
      <span className="sparkle-burst sparkle-burst-4" />
      <span className="sparkle-burst sparkle-burst-5" />
    </span>
  );
}
