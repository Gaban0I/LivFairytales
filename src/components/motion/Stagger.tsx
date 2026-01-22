'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { createRevealVariants, type MotionVariant } from './presets';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

export function Stagger({
  children,
  className = '',
  delay = 0,
  stagger = 0.1,
  once = true,
}: StaggerProps) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: reduceMotion ? 0 : stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  variant?: MotionVariant;
  hoverLift?: boolean;
};

export function StaggerItem({
  children,
  className = '',
  variant = 'fadeUp',
  hoverLift = false,
}: StaggerItemProps) {
  const reduceMotion = usePrefersReducedMotion();
  const variants = createRevealVariants(reduceMotion)[variant];

  return (
    <motion.div
      className={className}
      variants={variants}
      transition={{ duration: reduceMotion ? 0.2 : 0.6, ease: 'easeOut' }}
      whileHover={hoverLift && !reduceMotion ? { y: -4 } : undefined}
    >
      {children}
    </motion.div>
  );
}
