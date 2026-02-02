'use client';

import type { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';

import { usePrefersReducedMotion } from '@/components/motion/usePrefersReducedMotion';

type MagicAuraProps = {
  children: ReactNode;
  className?: string;
  intensity?: 'soft' | 'medium' | 'strong';
  colorVariant?: 'rose' | 'lavender' | 'gold';
  trigger?: 'hover' | 'view';
};

const auraVariants = {
  hidden: { '--aura-opacity': 0 },
  show: { '--aura-opacity': 1 },
} as const;

export function MagicAura({
  children,
  className = '',
  intensity = 'soft',
  colorVariant = 'rose',
  trigger = 'hover',
}: MagicAuraProps) {
  const reduceMotion = usePrefersReducedMotion() ?? false;
  const classes = [
    'magic-aura',
    `magic-aura--${intensity}`,
    `magic-aura--${colorVariant}`,
    trigger === 'hover' ? 'magic-aura--hover' : 'magic-aura--view',
    reduceMotion ? 'magic-aura--reduced' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (trigger === 'view') {
    const style = (reduceMotion ? { '--aura-opacity': 1 } : undefined) as CSSProperties | undefined;
    return (
      <motion.div
        className={classes}
        style={style}
        initial={reduceMotion ? false : 'hidden'}
        whileInView={reduceMotion ? undefined : 'show'}
        viewport={{ once: true, amount: 0.3 }}
        variants={reduceMotion ? undefined : auraVariants}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={classes}>{children}</div>;
}
