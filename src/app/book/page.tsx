import type { Metadata } from 'next';
import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { GalleryStrip } from '@/components/ui/GalleryStrip';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { siteContent } from '@/content/siteContent';

export const metadata: Metadata = {
  title: siteContent.metadata.book.title,
  description: siteContent.metadata.book.description,
  openGraph: {
    title: siteContent.metadata.book.title,
    description: siteContent.metadata.book.description,
    images: [siteContent.metadata.book.ogImage],
  },
};

export default function BookPage() {
  const { intro, cards, gallery } = siteContent.book;

  return (
    <div>
      <Section className="space-y-4 text-center">
        <Reveal className="space-y-4">
          <h1 className="text-4xl sm:text-5xl">{intro.title}</h1>
          <p className="mx-auto max-w-2xl text-sm text-night-800">{intro.subtitle}</p>
        </Reveal>
      </Section>

      <Section className="grid gap-6 md:grid-cols-2">
        {cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.08}>
            <Card className="space-y-4">
              <div className="relative h-48 overflow-hidden rounded-2xl">
                <Image src={card.image.src} alt={card.image.alt} fill className="object-cover" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl">{card.title}</h2>
                <p className="text-sm text-night-800">{card.description}</p>
              </div>
              <Button href={card.ctaHref}>{card.ctaLabel}</Button>
            </Card>
          </Reveal>
        ))}
      </Section>

      <Reveal>
        <GalleryStrip
          title={gallery.title}
          images={gallery.images}
          viewMoreLabel={gallery.viewMoreLabel}
          viewMoreHref={gallery.viewMoreHref}
        />
      </Reveal>
    </div>
  );
}
