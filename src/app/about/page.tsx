import type { Metadata } from 'next';
import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SparkleDivider } from '@/components/motion/SparkleDivider';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/motion/Reveal';
import { siteContent } from '@/content/siteContent';

export const metadata: Metadata = {
  title: siteContent.metadata.about.title,
  description: siteContent.metadata.about.description,
  openGraph: {
    title: siteContent.metadata.about.title,
    description: siteContent.metadata.about.description,
    images: [siteContent.metadata.about.ogImage],
  },
};

export default function AboutPage() {
  const { hero, timeline, timelineTitle, board, boardSubtitle, news, newsSubtitle, newsReadMoreLabel } =
    siteContent.about;

  return (
    <div>
      <Section className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal className="space-y-5">
          <h1 className="text-4xl sm:text-5xl">{hero.title}</h1>
          <p className="text-sm leading-relaxed text-night-800">{hero.subtitle}</p>
          <Button href="/contact">{hero.ctaLabel}</Button>
        </Reveal>
        <Reveal className="relative h-72 overflow-hidden rounded-3xl border border-white/70 shadow-magic sm:h-96" delay={0.1}>
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>
      </Section>

      <Section className="space-y-8">
        <Reveal className="space-y-3">
          <h2 className="text-3xl sm:text-4xl">{timelineTitle}</h2>
          <SparkleDivider />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {timeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Card className="space-y-3">
                <h3 className="text-xl">{item.title}</h3>
                <p className="text-sm text-night-800">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="executive-board" className="space-y-8">
        <Reveal className="space-y-3">
          <h2 className="text-3xl sm:text-4xl">{board.title}</h2>
          <p className="text-sm text-night-800">{boardSubtitle}</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {board.members.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <Card className="space-y-4">
                <div className="relative h-48 overflow-hidden rounded-2xl">
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div>
                  <h3 className="text-lg">{member.name}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold-400">{member.role}</p>
                </div>
                <p className="text-sm text-night-800">{member.bio}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="in-the-news" className="space-y-8">
        <Reveal className="space-y-3">
          <h2 className="text-3xl sm:text-4xl">{news.title}</h2>
          <p className="text-sm text-night-800">{newsSubtitle}</p>
        </Reveal>
        <div className="grid gap-4">
          {news.items.map((item, index) => (
            <Reveal key={item.headline} delay={index * 0.08}>
              <Card className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold-400">{item.outlet}</p>
                  <h3 className="text-lg">{item.headline}</h3>
                </div>
                <Button variant="secondary" href={item.href}>
                  {newsReadMoreLabel}
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
