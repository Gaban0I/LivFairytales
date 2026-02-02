'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { createRevealVariants, type MotionVariant } from './presets';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: MotionVariant;
  delay?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className = '',
  variant = 'fadeUp',
  delay = 0,
  once = true,
}: RevealProps) {
  const reduceMotion = usePrefersReducedMotion() ?? false;
  const variants = createRevealVariants(reduceMotion)[variant];

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
      variants={variants}
      transition={{ duration: reduceMotion ? 0.2 : 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
