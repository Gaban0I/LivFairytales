'use client';

import type { ComponentProps } from 'react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/Button';
import { SparkleBurst } from './SparkleBurst';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

type MagicButtonProps = ComponentProps<typeof Button>;

export function MagicButton({ className = '', children, ...props }: MagicButtonProps) {
  const reduceMotion = usePrefersReducedMotion() ?? false;

  return (
    <motion.div
      className="inline-block"
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      <Button
        className={`magic-button ${reduceMotion ? 'magic-button--reduced' : ''} ${className}`.trim()}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <SparkleBurst />
      </Button>
    </motion.div>
  );
}
