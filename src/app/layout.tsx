import type { Metadata } from 'next';
import { Cinzel_Decorative, Great_Vibes, Montserrat } from 'next/font/google';

import '@/styles/globals.css';

import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { PreferencesProvider } from '@/components/preferences/PreferencesProvider';
import { siteContent } from '@/content/siteContent';
import { SeoJsonLd } from '@/components/SeoJsonLd';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://livfairytales.com';

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
  openGraph: {
    title: siteContent.metadata.home.title,
    description: siteContent.metadata.home.description,
    images: [siteContent.metadata.home.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.metadata.home.title,
    description: siteContent.metadata.home.description,
    images: [siteContent.metadata.home.ogImage],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${titleFont.variable} ${accentFont.variable} ${bodyFont.variable}`}>\n      <body className="sparkle-bg">\n        <PreferencesProvider />\n        <SeoJsonLd />\n        <div className="magic-motif" aria-hidden="true" />\n        <div className="relative z-10 flex min-h-screen flex-col">\n          <SiteHeader />\n          <main className="flex-1">{children}</main>\n          <SiteFooter />\n        </div>\n      </body>\n    </html>\n  );\n}