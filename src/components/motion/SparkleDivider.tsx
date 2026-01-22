'use client';

import { Reveal } from './Reveal';

export function SparkleDivider() {
  return (
    <Reveal variant="fadeIn" className="sparkle-divider" aria-hidden="true">
      <span className="sparkle-divider__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 text-gold-300" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2.5l2.2 6.3 6.6.1-5.3 3.9 2 6.4-5.5-3.7-5.5 3.7 2-6.4-5.3-3.9 6.6-.1L12 2.5z" />
        </svg>
      </span>
    </Reveal>
  );
}
