import type { Metadata } from 'next';

import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/motion/Reveal';
import { siteContent } from '@/content/siteContent';

const title = 'Merch solidaire - Liv Fairytales';
const description = 'Une boutique solidaire pour soutenir nos actions, bientôt disponible.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/extras/merch',
  },
  openGraph: {
    title,
    description,
    images: [siteContent.metadata.extras.ogImage],
    url: '/extras/merch',
  },
};

export default function ExtrasMerchPage() {
  return (
    <Section className="space-y-6">
      <Reveal className="space-y-4">
        <h1 className="text-4xl sm:text-5xl">{siteContent.extras.merch.title}</h1>
        <Card className="space-y-2">
          <p className="text-sm text-night-800">{siteContent.extras.merch.body}</p>
        </Card>
      </Reveal>
    </Section>
  );
}
