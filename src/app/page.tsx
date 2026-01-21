import type { Metadata } from 'next';
import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Divider } from '@/components/ui/Divider';
import { GalleryStrip } from '@/components/ui/GalleryStrip';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={hero.backgroundImage.src}
            alt={hero.backgroundImage.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
        </div>
        <Section className="relative z-10 grid gap-10 py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-6">
            <Badge>{hero.badge}</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl">
              <span className="block">{hero.titleLine1}</span>
              <span className="block text-gold-400">{hero.titleLine2}</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-night-800">{hero.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/book">{hero.ctaLabel}</Button>
              <Button variant="secondary" href="/support">
                {hero.secondaryCtaLabel}
              </Button>
            </div>
          </Reveal>
          <Reveal className="relative hidden items-center justify-center lg:flex" delay={0.1}>
            <Card className="w-full max-w-sm space-y-4 bg-white/80">
              <h3 className="text-2xl">{hero.card.title}</h3>
              <p className="text-sm text-night-800">{hero.card.body}</p>
              <Divider />
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
        <Reveal className="relative h-72 overflow-hidden rounded-3xl border border-white/70 shadow-magic sm:h-96">
          <Image src={story.image.src} alt={story.image.alt} fill className="object-cover" />
        </Reveal>
        <Reveal className="space-y-6" delay={0.1}>
          <h2 className="text-3xl sm:text-4xl">{story.title}</h2>
          <p className="text-sm leading-relaxed text-night-800">{story.body}</p>
          <Button href={story.ctaHref}>{story.ctaLabel}</Button>
        </Reveal>
      </Section>

      <Section className="space-y-8">
        <Reveal className="space-y-4">
          <h2 className="text-3xl sm:text-4xl">{schedule.title}</h2>
          <p className="text-sm text-night-800">{schedule.subtitle}</p>
        </Reveal>
        <Reveal className="flex flex-wrap gap-3" delay={0.1}>
          {schedule.chips.map((chip) => (
            <Badge key={chip}>{chip}</Badge>
          ))}
        </Reveal>
        <Reveal delay={0.15}>
          <Button href={schedule.ctaHref}>{schedule.ctaLabel}</Button>
        </Reveal>
      </Section>

      <Section className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Card className="space-y-4">
            <h3 className="text-2xl">{join.title}</h3>
            <p className="text-sm text-night-800">{join.body}</p>
            <Button href={join.ctaHref}>{join.ctaLabel}</Button>
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="space-y-4">
            <h3 className="text-2xl">{donate.title}</h3>
            <p className="text-sm text-night-800">{donate.body}</p>
            <Button variant="secondary" href={donate.ctaHref}>
              {donate.ctaLabel}
            </Button>
          </Card>
        </Reveal>
      </Section>

      <Section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-4">
          <h2 className="text-3xl sm:text-4xl whitespace-pre-line">{event.title}</h2>
          <p className="text-sm text-night-800">{event.body}</p>
          <Button href={event.ctaHref}>{event.ctaLabel}</Button>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="space-y-3 bg-white/80">
            <h3 className="text-xl">{eventCard.title}</h3>
            <p className="text-sm text-night-800">{eventCard.body}</p>
            <Divider />
            <ul className="space-y-2 text-sm text-night-700">
              {eventCard.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </Section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={finalGallery.image.src} alt={finalGallery.image.alt} fill className="object-cover" />
          <div className="absolute inset-0 bg-night-900/50" />
        </div>
        <Section className="relative z-10 space-y-6 text-white">
          <Reveal className="space-y-6">
            <h2 className="text-3xl sm:text-4xl">{finalGallery.headline}</h2>
            <Button variant="secondary" href={finalGallery.buttonHref}>
              {finalGallery.buttonLabel}
            </Button>
          </Reveal>
        </Section>
      </section>
    </div>
  );
}
