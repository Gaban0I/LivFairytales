import type { Metadata } from 'next';
import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CTA } from '@/components/ui/CTA';
import { SparkleDivider } from '@/components/motion/SparkleDivider';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/motion/Reveal';
import { siteContent } from '@/content/siteContent';

export const metadata: Metadata = {
  title: siteContent.metadata.howWeHelp.title,
  description: siteContent.metadata.howWeHelp.description,
  openGraph: {
    title: siteContent.metadata.howWeHelp.title,
    description: siteContent.metadata.howWeHelp.description,
    images: [siteContent.metadata.howWeHelp.ogImage],
  },
};

export default function HowWeHelpPage() {
  const { hero, sections, impact, safety, cta } = siteContent.howWeHelp;

  return (
    <div>
      <Section className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal className="space-y-5">
          <h1 className="text-4xl sm:text-5xl">{hero.title}</h1>
          <p className="text-sm leading-relaxed text-night-800">{hero.subtitle}</p>
          <Button href="/book">{hero.ctaLabel}</Button>
        </Reveal>
        <Reveal className="relative h-72 overflow-hidden rounded-3xl border border-white/70 shadow-magic sm:h-96" delay={0.1}>
          <Image src={hero.image.src} alt={hero.image.alt} fill className="object-cover" />
        </Reveal>
      </Section>

      {sections.map((section, index) => (
        <Section
          key={section.title}
          className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
        >
          <Reveal
            className={`relative h-64 overflow-hidden rounded-3xl border border-white/70 shadow-magic sm:h-80 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
          >
            <Image src={section.image.src} alt={section.image.alt} fill className="object-cover" />
          </Reveal>
          <Reveal className="space-y-4" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl">{section.title}</h2>
            <p className="text-sm text-night-800">{section.body}</p>
          </Reveal>
        </Section>
      ))}

      <Section className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Card className="space-y-3">
            <h3 className="text-2xl">{impact.title}</h3>
            <SparkleDivider />
            <p className="text-sm text-night-800">{impact.body}</p>
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="space-y-3">
            <h3 className="text-2xl">{safety.title}</h3>
            <SparkleDivider />
            <p className="text-sm text-night-800">{safety.body}</p>
          </Card>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <CTA
            title={cta.title}
            body={cta.body}
            primaryLabel={cta.primaryLabel}
            primaryHref={cta.primaryHref}
            secondaryLabel={cta.secondaryLabel}
            secondaryHref={cta.secondaryHref}
          />
        </Reveal>
      </Section>
    </div>
  );
}
