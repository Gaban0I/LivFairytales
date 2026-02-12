import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://livfairytales.com';

const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
  { path: '/', priority: 1, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/how-we-help', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/book', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/support', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/extras/merch', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/partnership', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/extras/resources', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/extras/accessibility', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/mentions-legales', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/legal/politique-confidentialite', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/legal/droit-a-l-image', priority: 0.4, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
