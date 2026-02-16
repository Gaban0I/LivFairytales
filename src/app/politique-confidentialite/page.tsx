import type { Metadata } from 'next';
import Link from 'next/link';

import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/motion/Reveal';
import { Section } from '@/components/ui/Section';
import { siteContent } from '@/content/siteContent';

const title = 'Politique de confidentialité';
const description =
  'Données collectées, usages et droits relatifs à la politique de confidentialité de Liv Fairytales.';
const brandName = 'Liv Fairytales';

export const metadata: Metadata = {
  title: `${title} - ${brandName}`,
  description,
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/politique-confidentialite',
  },
  openGraph: {
    title: `${title} - ${brandName}`,
    description,
    images: [siteContent.metadata.home.ogImage],
    url: '/politique-confidentialite',
  },
};

const sections = [
  {
    title: 'Collecte et usage',
    body: [
      "Les informations recueillies via le site Liv Fairytales (formulaire de contact, e-mail) sont utilisées uniquement dans le cadre des échanges liés aux activités de l'association.",
    ],
  },
  {
    title: 'Partage des données',
    body: ['Les données personnelles collectées ne sont ni vendues, ni cédées, ni transmises à des tiers.'],
  },
  {
    title: 'Vos droits',
    body: [
      "Conformément à la réglementation en vigueur (RGPD), vous disposez d'un droit d'accès, de rectification ou de suppression de vos données.",
      'Pour exercer ces droits, contactez-nous à :',
    ],
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <Section className="space-y-8">
      <Reveal className="space-y-3">
        <h1 className="text-4xl sm:text-5xl">{title}</h1>
        <p className="max-w-3xl text-sm text-night-800">
          Cette politique explique comment Liv Fairytales collecte et utilise les informations
          transmises via le site.
        </p>
      </Reveal>

      {sections.map((section) => (
        <Reveal key={section.title}>
          <Card className="space-y-3">
            <h2 className="text-2xl">{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="text-sm text-night-800">
                {paragraph}
              </p>
            ))}
            {section.title === 'Vos droits' ? (
              <Link
                className="text-sm underline underline-offset-4 hover:text-gold-400"
                href="mailto:livfairytales@gmail.com"
              >
                livfairytales@gmail.com
              </Link>
            ) : null}
          </Card>
        </Reveal>
      ))}
    </Section>
  );
}
