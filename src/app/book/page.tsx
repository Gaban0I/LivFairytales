import type { Metadata } from 'next';
import Image from 'next/image';

import { Card } from '@/components/ui/Card';
import { GalleryStrip } from '@/components/ui/GalleryStrip';
import { Section } from '@/components/ui/Section';
import { MagicButton } from '@/components/motion/MagicButton';
import { Reveal } from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
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

      <Section>
        <Stagger className="grid gap-6 md:grid-cols-2" stagger={0.1}>
          {cards.map((card) => (
            <StaggerItem key={card.title} variant="scaleIn" hoverLift>
              <Card className="space-y-4">
                <div className="relative h-48 overflow-hidden rounded-2xl">
                  <Image src={card.image.src} alt={card.image.alt} fill className="object-cover" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl">{card.title}</h2>
                  <p className="text-sm text-night-800">{card.description}</p>
                </div>
                <MagicButton href={card.ctaHref}>{card.ctaLabel}</MagicButton>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
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
