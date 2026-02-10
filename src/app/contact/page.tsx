import type { Metadata } from 'next';

import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/motion/Reveal';
import { siteContent } from '@/content/siteContent';

export const metadata: Metadata = {
  title: siteContent.metadata.contact.title,
  description: siteContent.metadata.contact.description,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: siteContent.metadata.contact.title,
    description: siteContent.metadata.contact.description,
    images: [siteContent.metadata.contact.ogImage],
    url: '/contact',
  },
};

export default function ContactPage() {
  const { hero, locations, social } = siteContent.contact;

  return (
    <div>
      <Section className="space-y-4">
        <Reveal className="space-y-2">
          <h1 className="text-4xl sm:text-5xl">{hero.title}</h1>
          <p className="text-sm text-night-800">{hero.subtitle}</p>
        </Reveal>
      </Section>

      <Section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <ContactForm />
        </Reveal>
        <div className="space-y-6">
          <Reveal>
            <Card className="space-y-3">
              <h2 className="text-2xl">{locations.title}</h2>
              <p className="text-sm text-night-800">{locations.body}</p>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="flex flex-col gap-3">
              <h2 className="text-2xl">{social.title}</h2>
              <div className="mt-auto flex flex-wrap gap-3">
                {siteContent.socialLinks.map((link) => (
                  <Button key={link.href} variant="secondary" href={link.href}>
                    {link.label}
                  </Button>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
