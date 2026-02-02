import type { ReactNode } from 'react';

import { Button } from './Button';
import { Card } from './Card';

type CTAProps = {
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  children?: ReactNode;
};

export function CTA({
  title,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  children,
}: CTAProps) {
  return (
    <Card className="flex flex-col gap-6 bg-white/80">
      <div className="space-y-3">
        <h3 className="text-3xl">{title}</h3>
        <p className="text-sm leading-relaxed text-night-800">{body}</p>
      </div>
      {children}
      <div className="mt-auto flex flex-wrap gap-3">
        <Button href={primaryHref}>{primaryLabel}</Button>
        {secondaryLabel && secondaryHref ? (
          <Button variant="secondary" href={secondaryHref}>
            {secondaryLabel}
          </Button>
        ) : null}
      </div>
    </Card>
  );
}
