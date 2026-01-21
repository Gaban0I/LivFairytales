import Image from 'next/image';

import { Button } from './Button';
import { Section } from './Section';
import { Divider } from './Divider';

type GalleryStripProps = {
  title: string;
  images: { src: string; alt: string }[];
  viewMoreLabel: string;
  viewMoreHref: string;
};

export function GalleryStrip({ title, images, viewMoreLabel, viewMoreHref }: GalleryStripProps) {
  return (
    <Section className="space-y-8">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl">{title}</h2>
          <Divider />
        </div>
        <Button variant="secondary" href={viewMoreHref}>
          {viewMoreLabel}
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative h-40 overflow-hidden rounded-2xl border border-white/70 shadow-magic"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 20vw"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}