import type { Metadata } from 'next';

import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/motion/Reveal';
import { siteContent } from '@/content/siteContent';

const title = 'Partenariats solidaires - Liv Fairytales';
const description = 'Construisons des actions solidaires avec votre structure ou entreprise.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/partnership',
  },
  openGraph: {
    title,
    description,
    images: [siteContent.metadata.extras.ogImage],
    url: '/partnership',
  },
};

export default function PartnershipPage() {
  return (
    <Section className="space-y-6">
      <Reveal className="space-y-4">
        <h1 className="text-4xl sm:text-5xl">{siteContent.extras.partnerships.title}</h1>
        <Card className="space-y-2">
          <p className="text-sm text-night-800">{siteContent.extras.partnerships.body}</p>
        </Card>
      </Reveal>
    </Section>
  );
}
