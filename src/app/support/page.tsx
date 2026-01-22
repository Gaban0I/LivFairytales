import type { Metadata } from 'next';

import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/motion/Reveal';
import { siteContent } from '@/content/siteContent';

export const metadata: Metadata = {
  title: siteContent.metadata.support.title,
  description: siteContent.metadata.support.description,
  openGraph: {
    title: siteContent.metadata.support.title,
    description: siteContent.metadata.support.description,
    images: [siteContent.metadata.support.ogImage],
  },
};

export default function SupportPage() {
  const { donation, ways, faqs } = siteContent.support;

  return (
    <div>
      <Section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-4">
          <h1 className="text-4xl sm:text-5xl">{donation.title}</h1>
          <p className="text-sm text-night-800">{donation.body}</p>
          <Button href={donation.ctaHref}>{donation.ctaLabel}</Button>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="space-y-3">
            <h2 className="text-2xl">{donation.cardTitle}</h2>
            <p className="text-sm text-night-800">{donation.cardBody}</p>
            <Button variant="secondary" href="/contact">
              {donation.cardCtaLabel}
            </Button>
          </Card>
        </Reveal>
      </Section>

      <Section className="space-y-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">{ways.title}</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {ways.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Card className="space-y-3">
                <h3 className="text-xl">{item.title}</h3>
                <p className="text-sm text-night-800">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="space-y-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl">{faqs.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion items={faqs.items} />
        </Reveal>
      </Section>
    </div>
  );
}
