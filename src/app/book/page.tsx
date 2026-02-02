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
  const { intro, sections, notesTitle, notes, gallery } = siteContent.book;

  return (
    <div>
      <Section className="space-y-4 text-center">
        <Reveal className="space-y-4">
          <h1 className="text-4xl sm:text-5xl">{intro.title}</h1>
          <p className="mx-auto max-w-2xl text-sm text-night-800">{intro.subtitle}</p>
        </Reveal>
      </Section>

      {sections.map((section) => (
        <Section key={section.title} className="space-y-6">
          <Reveal className="space-y-3">
            <h2 className="text-3xl sm:text-4xl">{section.title}</h2>
            {section.subtitle ? <p className="text-sm text-night-800">{section.subtitle}</p> : null}
          </Reveal>
          <Stagger className="grid gap-6 md:grid-cols-2" stagger={0.1}>
            {section.cards.map((card) => (
              <StaggerItem key={card.title} variant="scaleIn" hoverLift className="h-full">
                <Card className="flex h-full flex-col gap-4">
                  <div className="relative h-48 overflow-hidden rounded-2xl">
                    <Image
                      src={card.image.src}
                      alt={card.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl">{card.title}</h3>
                    {card.description ? <p className="text-sm text-night-800">{card.description}</p> : null}
                    {card.details && card.details.length > 0 ? (
                      <ul className="list-disc space-y-1 pl-5 text-sm text-night-800">
                        {card.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  <div className="mt-auto">
                    <MagicButton href={card.ctaHref}>{card.ctaLabel}</MagicButton>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      ))}

      {notes && notes.length > 0 ? (
        <Section>
          <Reveal>
            <Card className="space-y-3">
              <h2 className="text-2xl">{notesTitle}</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-night-800">
                {notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </Section>
      ) : null}

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
