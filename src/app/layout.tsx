import type { Metadata } from 'next';
import { Cinzel_Decorative, Great_Vibes, Montserrat } from 'next/font/google';

import '@/styles/globals.css';

import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { PreferencesProvider } from '@/components/preferences/PreferencesProvider';
import { siteContent } from '@/content/siteContent';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://livfairytales.com';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: siteContent.brandName,
      url: siteUrl,
      email: 'livfairytales@gmail.com',
      founder: 'Olivia Guzniczak',
      sameAs: siteContent.socialLinks.map((link) => link.href),
      logo: `${siteUrl}/images/placeholder-logo.png`,
    },
    {
      '@type': 'WebSite',
      name: siteContent.brandName,
      url: siteUrl,
      inLanguage: 'fr-FR',
    },
  ],
};

const titleFont = Cinzel_Decorative({
  subsets: ['latin'],
  variable: '--font-title',
  display: 'swap',
  weight: ['400', '700'],
});

const accentFont = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
  weight: ['400'],
});

const bodyFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteContent.metadata.home.title,
  description: siteContent.metadata.home.description,
  metadataBase: new URL(siteUrl),
  applicationName: siteContent.brandName,
  creator: siteContent.brandName,
  publisher: siteContent.brandName,
  openGraph: {
    title: siteContent.metadata.home.title,
    description: siteContent.metadata.home.description,
    images: [siteContent.metadata.home.ogImage],
    type: 'website',
    siteName: siteContent.brandName,
    locale: 'fr_FR',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.metadata.home.title,
    description: siteContent.metadata.home.description,
    images: [siteContent.metadata.home.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${titleFont.variable} ${accentFont.variable} ${bodyFont.variable}`}>
      <body className="sparkle-bg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <PreferencesProvider />
        <div className="magic-motif" aria-hidden="true" />
        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
