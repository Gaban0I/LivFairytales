import type { Metadata } from 'next';
import { Cinzel_Decorative, Great_Vibes, Montserrat } from 'next/font/google';

import '@/styles/globals.css';

import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { siteContent } from '@/content/siteContent';

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
  openGraph: {
    title: siteContent.metadata.home.title,
    description: siteContent.metadata.home.description,
    images: [siteContent.metadata.home.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${titleFont.variable} ${accentFont.variable} ${bodyFont.variable}`}>
      <body className="bg-stars">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
