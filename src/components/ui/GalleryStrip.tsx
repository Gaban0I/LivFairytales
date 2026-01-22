'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from './Button';
import { Section } from './Section';
import { SparkleDivider } from '@/components/motion/SparkleDivider';
import { usePrefersReducedMotion } from '@/components/motion/usePrefersReducedMotion';

type GalleryStripProps = {
  title: string;
  images: { src: string; alt: string }[];
  viewMoreLabel: string;
  viewMoreHref: string;
};

export function GalleryStrip({ title, images, viewMoreLabel, viewMoreHref }: GalleryStripProps) {
  const reduceMotion = usePrefersReducedMotion() ?? false;

  return (
    <Section className="space-y-8">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl">{title}</h2>
          <SparkleDivider />
        </div>
        <Button variant="secondary" href={viewMoreHref}>
          {viewMoreLabel}
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {images.map((image, index) => (
          <motion.div
            key={`${image.src}-${index}`}
            className="group relative h-40 overflow-hidden rounded-2xl border border-white/70 shadow-magic"
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 20vw"
              loading="lazy"
            />
            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-gold-100/30" />
              <div className="absolute inset-0 sparkle-overlay" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
