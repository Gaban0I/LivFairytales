import type { Metadata } from 'next';
import Link from 'next/link';

import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/motion/Reveal';
import { Section } from '@/components/ui/Section';
import { siteContent } from '@/content/siteContent';

const title = "Droit à l'image";
const description = "Règles de diffusion des photos et demandes de retrait d'images.";
const brandName = 'Liv Fairytales';

export const metadata: Metadata = {
  title: `${title} - ${brandName}`,
  description,
  openGraph: {
    title: `${title} - ${brandName}`,
    description,
    images: [siteContent.metadata.home.ogImage],
  },
};

const sections = [
  {
    title: 'Autorisation de diffusion',
    body: [
      "Les photographies et contenus visuels publiés sur ce site le sont avec l'autorisation des personnes concernées ou de leurs représentants légaux.",
    ],
  },
  {
    title: 'Protection des enfants',
    body: [
      "Aucune image d'enfant ne sera diffusée sans accord écrit préalable des parents ou responsables légaux.",
    ],
  },
  {
    title: 'Demande de retrait',
    body: ["Toute demande de retrait d'image peut être adressée à :"],
  },
];

export default function DroitImagePage() {
  return (
    <Section className="space-y-8">
      <Reveal className="space-y-3">
        <h1 className="text-4xl sm:text-5xl">{title}</h1>
        <p className="max-w-3xl text-sm text-night-800">
          Nous veillons à respecter le droit à l'image et la protection des personnes photographiées.
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
            {section.title === 'Demande de retrait' ? (
              <Link className="text-sm underline underline-offset-4 hover:text-gold-400" href="mailto:livfairytales@gmail.com">
                livfairytales@gmail.com
              </Link>
            ) : null}
          </Card>
        </Reveal>
      ))}
    </Section>
  );
}
