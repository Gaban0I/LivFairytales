import type { ComponentProps } from 'react';

export function Section({ className = '', ...props }: ComponentProps<'section'>) {
  return (
    <section
      className={`mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-12 ${className}`.trim()}
      {...props}
    />
  );
}