import type { ComponentProps, ReactNode } from 'react';

import { Card } from './Card';

type FieldProps = {
  label: string;
  as?: 'input' | 'textarea';
} & Omit<ComponentProps<'input'>, 'className'> & Omit<ComponentProps<'textarea'>, 'className'>;

export function Field({ label, as = 'input', ...props }: FieldProps) {
  const inputClasses =
    'mt-2 w-full rounded-2xl border border-blush-100 bg-white px-4 py-3 text-sm text-night-900 shadow-sm focus-visible:ring-2 focus-visible:ring-gold-300';

  return (
    <label className="text-sm font-semibold text-night-800">
      {label}
      {as === 'textarea' ? (
        <textarea className={inputClasses} rows={5} {...(props as ComponentProps<'textarea'>)} />
      ) : (
        <input className={inputClasses} {...(props as ComponentProps<'input'>)} />
      )}
    </label>
  );
}

export function FormCard({ children }: { children: ReactNode }) {
  return <Card className="space-y-4 bg-white/80">{children}</Card>;
}
