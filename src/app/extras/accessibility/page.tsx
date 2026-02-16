import type { Metadata } from 'next';

import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/motion/Reveal';
import { AccessibilitySettings } from '@/components/preferences/AccessibilitySettings';
import { siteContent } from '@/content/siteContent';

const title = 'Accessibilité - Liv Fairytales';
const description = 'Adaptez les effets visuels et les animations pour un confort optimal.';

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/extras/accessibility',
  },
  openGraph: {
    title,
    description,
    images: [siteContent.metadata.extras.ogImage],
    url: '/extras/accessibility',
  },
};

export default function ExtrasAccessibilityPage() {
  return (
    <Section className="space-y-6">
      <Reveal className="space-y-4">
        <h1 className="text-4xl sm:text-5xl">{siteContent.extras.accessibility.title}</h1>
        <p className="max-w-2xl text-sm text-night-800">{siteContent.extras.accessibility.body}</p>
      </Reveal>
      <Reveal>
        <Card className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-night-600">Préférences visuelles</p>
          <AccessibilitySettings />
        </Card>
      </Reveal>
    </Section>
  );
}
