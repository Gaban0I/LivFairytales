import type { Metadata } from 'next';
import Image from 'next/image';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { GalleryStrip } from '@/components/ui/GalleryStrip';
import { Section } from '@/components/ui/Section';
import { MagicButton } from '@/components/motion/MagicButton';
import { Reveal } from '@/components/motion/Reveal';
import { SparkleDivider } from '@/components/motion/SparkleDivider';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { siteContent } from '@/content/siteContent';

export const metadata: Metadata = {
  title: siteContent.metadata.home.title,
  description: siteContent.metadata.home.description,
  openGraph: {
    title: siteContent.metadata.home.title,
    description: siteContent.metadata.home.description,
    images: [siteContent.metadata.home.ogImage],
  },
};

export default function HomePage() {
  const { hero, gallery, story, schedule, join, donate, event, eventCard, finalGallery } = siteContent.home;

  return (
    <div>
      <section className="relative">
        <Section className="relative z-10 grid gap-10 py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <Stagger className="space-y-6">
            <StaggerItem>
              <Badge>{hero.badge}</Badge>
            </StaggerItem>
            <StaggerItem variant="fadeUp">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl">
                <span className="block">{hero.titleLine1}</span>
                <span className="block text-gold-400">{hero.titleLine2}</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="max-w-xl text-base leading-relaxed text-night-800">{hero.subtitle}</p>
            </StaggerItem>
            <StaggerItem className="flex flex-wrap gap-4">
              <MagicButton href="/book">{hero.ctaLabel}</MagicButton>
              <Button variant="secondary" href="/support">
                {hero.secondaryCtaLabel}
              </Button>
            </StaggerItem>
          </Stagger>
          <Reveal className="relative hidden items-center justify-center lg:flex" variant="scaleIn" delay={0.1}>
            <Card className="w-full max-w-sm space-y-4 bg-white/80">
              <h3 className="text-2xl">{hero.card.title}</h3>
              <p className="text-sm text-night-800">{hero.card.body}</p>
              <SparkleDivider />
              <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-night-700">
                {hero.card.stats.map((stat) => (
                  <span key={stat}>{stat}</span>
                ))}
              </div>
            </Card>
          </Reveal>
        </Section>
      </section>

      <Reveal>
        <GalleryStrip
          title={gallery.title}
          images={gallery.images}
          viewMoreLabel={gallery.viewMoreLabel}
          viewMoreHref={gallery.viewMoreHref}
        />
      </Reveal>

      <Section className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal className="relative h-72 overflow-hidden rounded-3xl border border-white/70 shadow-magic sm:h-96" variant="slideLeft">
          <Image
            src={story.image.src}
            alt={story.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>
        <Reveal className="space-y-6" variant="slideRight" delay={0.05}>
          <h2 className="text-3xl sm:text-4xl">{story.title}</h2>
          <p className="text-sm leading-relaxed text-night-800">{story.body}</p>
          <MagicButton href={story.ctaHref}>{story.ctaLabel}</MagicButton>
        </Reveal>
      </Section>

      <Section className="space-y-8">
        <Reveal className="space-y-4">
          <h2 className="text-3xl sm:text-4xl">{schedule.title}</h2>
          <p className="text-sm text-night-800">{schedule.subtitle}</p>
        </Reveal>
        <Stagger className="flex flex-wrap gap-3" stagger={0.08}>
          {schedule.chips.map((chip) => (
            <StaggerItem key={chip}>
              <Badge>{chip}</Badge>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal>
          <MagicButton href={schedule.ctaHref}>{schedule.ctaLabel}</MagicButton>
        </Reveal>
      </Section>

      <Section>
        <Stagger className="grid gap-6 lg:grid-cols-2" stagger={0.1}>
          <StaggerItem>
            <Card className="space-y-4">
              <h3 className="text-2xl">{join.title}</h3>
              <p className="text-sm text-night-800">{join.body}</p>
              <MagicButton href={join.ctaHref}>{join.ctaLabel}</MagicButton>
            </Card>
          </StaggerItem>
          <StaggerItem>
            <Card className="space-y-4">
              <h3 className="text-2xl">{donate.title}</h3>
              <p className="text-sm text-night-800">{donate.body}</p>
              <Button variant="secondary" href={donate.ctaHref}>
                {donate.ctaLabel}
              </Button>
            </Card>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-4" variant="fadeUp">
          <h2 className="text-3xl sm:text-4xl whitespace-pre-line">{event.title}</h2>
          <p className="text-sm text-night-800">{event.body}</p>
          <MagicButton href={event.ctaHref}>{event.ctaLabel}</MagicButton>
        </Reveal>
        <Reveal variant="scaleIn" delay={0.1}>
          <Card className="space-y-3 bg-white/80">
            <h3 className="text-xl">{eventCard.title}</h3>
            <p className="text-sm text-night-800">{eventCard.body}</p>
            <SparkleDivider />
            <ul className="space-y-2 text-sm text-night-700">
              {eventCard.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </Section>

      <section className="relative">
        <Section className="relative z-10 space-y-6 text-night-900">
          <Reveal className="space-y-6" variant="fadeUp">
            <h2 className="text-3xl sm:text-4xl">{finalGallery.headline}</h2>
            <MagicButton href={finalGallery.buttonHref}>{finalGallery.buttonLabel}</MagicButton>
          </Reveal>
        </Section>
      </section>
    </div>
  );
}
