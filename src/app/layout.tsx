import type { Metadata } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';

import '@/styles/globals.css';

import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { siteContent } from '@/content/siteContent';

const serif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Manrope({
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
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
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