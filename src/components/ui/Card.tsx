import type { ComponentProps } from 'react';

export function Card({ className = '', ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={`rounded-3xl border border-white/60 bg-white/70 p-6 shadow-magic backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:shadow-glow ${className}`.trim()}
      {...props}
    />
  );
}
