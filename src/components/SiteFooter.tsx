import Link from 'next/link';

import { siteContent } from '@/content/siteContent';

export function SiteFooter() {
  return (
    <footer className="border-t border-[#f2cfd3] bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {siteContent.footer.columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-night-800">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link className="text-sm text-night-700 hover:text-gold-400" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-[#f2cfd3] pt-6 text-xs text-night-700 sm:flex-row sm:items-center sm:justify-between">
          <span>{siteContent.footer.copyright}</span>
          <span>
            {siteContent.footer.poweredByLabel} {siteContent.labels.poweredBy}
          </span>
        </div>
      </div>
    </footer>
  );
}
