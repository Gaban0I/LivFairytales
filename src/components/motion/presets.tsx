export type MotionVariant = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn';

export const createRevealVariants = (reducedMotion: boolean) => {
  const base = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  if (reducedMotion) {
    return {
      fadeUp: base,
      fadeIn: base,
      slideLeft: base,
      slideRight: base,
      scaleIn: base,
    };
  }

  return {
    fadeUp: {
      hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
      show: { opacity: 1, y: 0, filter: 'blur(0px)' },
    },
    fadeIn: {
      hidden: { opacity: 0, filter: 'blur(6px)' },
      show: { opacity: 1, filter: 'blur(0px)' },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 16, filter: 'blur(6px)' },
      show: { opacity: 1, x: 0, filter: 'blur(0px)' },
    },
    slideRight: {
      hidden: { opacity: 0, x: -16, filter: 'blur(6px)' },
      show: { opacity: 1, x: 0, filter: 'blur(0px)' },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.98, filter: 'blur(6px)' },
      show: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    },
  };
};
