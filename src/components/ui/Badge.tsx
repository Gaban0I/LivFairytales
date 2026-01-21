import type { ComponentProps } from 'react';

export function Badge({ className = '', ...props }: ComponentProps<'span'>) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-blush-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-night-800 ${className}`.trim()}
      {...props}
    />
  );
}