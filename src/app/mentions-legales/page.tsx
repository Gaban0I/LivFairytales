import type { Metadata } from 'next';
import Link from 'next/link';

import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/motion/Reveal';
import { Section } from '@/components/ui/Section';
import { siteContent } from '@/content/siteContent';

const title = 'Mentions légales';
const description = 'Informations légales, responsabilités et mentions relatives au site Liv Fairytales.';
const brandName = 'Liv Fairytales';

export const metadata: Metadata = {
  title: `${title} - ${brandName}`,
  description,
  alternates: {
    canonical: '/mentions-legales',
  },
  openGraph: {
    title: `${title} - ${brandName}`,
    description,
    images: [siteContent.metadata.home.ogImage],
    url: '/mentions-legales',
  },
};

const editorDetails = [
  { label: "Nom de l'association", value: 'Liv Fairytales' },
  { label: 'Statut', value: 'Association loi 1901' },
  { label: 'Responsable de publication', value: 'Olivia Guzniczak' },
  { label: 'Adresse e-mail', value: 'livfairytales@gmail.com', href: 'mailto:livfairytales@gmail.com' },
  { label: 'Siège social', value: '77170 Brie-Comte-Robert' },
  { label: 'Numéro RNA', value: 'Bientôt communiqué' },
  { label: 'Numéro SIREN', value: 'Bientôt communiqué' },
];

const hostingDetails = [
  { label: 'Hébergeur', value: 'Vercel Inc.' },
  { label: 'Adresse', value: '440 N Barranca Avenue #4133, Covina, CA 91723, United States' },
  { label: 'Contact', value: 'privacy@vercel.com', href: 'mailto:privacy@vercel.com' },
];

const responsibility = [
  "Les interventions de Liv Fairytales sont réalisées dans un cadre bénévole, en collaboration avec les structures partenaires, et dans le respect des règles en vigueur au sein des établissements accueillants.",
  "L'association ne se substitue en aucun cas à un accompagnement médical ou thérapeutique.",
];

const independence = [
  'Liv Fairytales est une association indépendante.',
  "Les personnages, costumes et univers présentés dans le cadre des actions de l'association sont des créations originales ou des interprétations artistiques inspirées de l'imaginaire, des contes et de la féerie, sans affiliation, partenariat ou autorisation avec des marques ou licences commerciales existantes.",
];

export default function MentionsLegalesPage() {
  return (
    <Section className="space-y-8">
      <Reveal className="space-y-3">
        <h1 className="text-4xl sm:text-5xl">{title}</h1>
        <p className="max-w-3xl text-sm text-night-800">
          Retrouvez les informations légales, les responsabilités de l'association et les mentions
          liées aux contenus publiés.
        </p>
      </Reveal>

      <Reveal>
        <Card className="space-y-4">
          <h2 className="text-2xl">Éditeur du site</h2>
          <dl className="grid gap-3 text-sm text-night-800">
            {editorDetails.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <dt className="font-semibold text-night-900 sm:w-56">{item.label}</dt>
                <dd className="text-night-800">
                  {item.href ? (
                    <Link className="underline underline-offset-4 hover:text-gold-400" href={item.href}>
                      {item.value}
                    </Link>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Card>
      </Reveal>

      <Reveal>
        <Card className="space-y-4">
          <h2 className="text-2xl">Hébergement du site</h2>
          <dl className="grid gap-3 text-sm text-night-800">
            {hostingDetails.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <dt className="font-semibold text-night-900 sm:w-56">{item.label}</dt>
                <dd className="text-night-800">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </Reveal>

      <Reveal>
        <Card className="space-y-3">
          <h2 className="text-2xl">Responsabilité</h2>
          {responsibility.map((paragraph) => (
            <p key={paragraph} className="text-sm text-night-800">
              {paragraph}
            </p>
          ))}
        </Card>
      </Reveal>

      <Reveal>
        <Card className="space-y-3">
          <h2 className="text-2xl">Indépendance artistique</h2>
          {independence.map((paragraph) => (
            <p key={paragraph} className="text-sm text-night-800">
              {paragraph}
            </p>
          ))}
        </Card>
      </Reveal>
    </Section>
  );
}
