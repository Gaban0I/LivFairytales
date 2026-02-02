import Link from 'next/link';
import type { ComponentProps } from 'react';

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-200 focus-visible:ring-2 transform-gpu hover:scale-[1.01]';

const variants = {
  primary:
    'bg-gold-300 text-night-900 shadow-glow hover:bg-gold-400 focus-visible:ring-gold-300',
  secondary:
    'border border-gold-300 text-night-900 hover:bg-gold-50 focus-visible:ring-gold-300',
  ghost: 'text-night-900 hover:bg-blush-100 focus-visible:ring-gold-300',
};

type ButtonProps = {
  variant?: keyof typeof variants;
  className?: string;
  href?: string;
} & Omit<ComponentProps<'button'>, 'className'>;

export function Button({
  variant = 'primary',
  className = '',
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
