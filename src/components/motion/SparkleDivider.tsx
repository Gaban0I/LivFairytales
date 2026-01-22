'use client';

import { Reveal } from './Reveal';

export function SparkleDivider() {
  return (
    <Reveal variant="fadeIn" className="sparkle-divider" aria-hidden="true">
      <span className="sparkle-divider__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-3 w-3 text-gold-300" fill="currentColor">
          <path d="M12 2l1.9 5.6L19 9l-5.1 1.4L12 16l-1.9-5.6L5 9l5.1-1.4L12 2z" />
        </svg>
      </span>
    </Reveal>
  );
}
