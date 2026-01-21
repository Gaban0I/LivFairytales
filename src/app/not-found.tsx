import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { siteContent } from '@/content/siteContent';

export const metadata: Metadata = {
  title: siteContent.metadata.notFound.title,
  description: siteContent.metadata.notFound.description,
  openGraph: {
    title: siteContent.metadata.notFound.title,
    description: siteContent.metadata.notFound.description,
    images: [siteContent.metadata.notFound.ogImage],
  },
};

export default function NotFound() {
  return (
    <Section className="flex min-h-[60vh] items-center justify-center">
      <Reveal>
        <Card className="max-w-xl space-y-4 text-center">
          <h1 className="text-4xl">{siteContent.notFound.title}</h1>
          <p className="text-sm text-night-800">{siteContent.notFound.body}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/">{siteContent.notFound.ctaHome}</Button>
            <Button variant="secondary" href="/contact">
              {siteContent.notFound.ctaContact}
            </Button>
          </div>
          <Link className="text-xs text-night-700 hover:text-gold-400" href="/">
            {siteContent.notFound.secondaryLink}
          </Link>
        </Card>
      </Reveal>
    </Section>
  );
}
