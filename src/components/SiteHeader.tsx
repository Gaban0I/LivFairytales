'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';

import { siteContent } from '@/content/siteContent';

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const handleNavigate = () => {
    setOpenDropdown(null);
    onNavigate?.();
  };

  return (
    <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
      {siteContent.navigation.primary.map((item, index) => {
        if (item.children && item.children.length > 0) {
          const childActive = item.children.some((child) => isActive(child.href));
          const isOpen = openDropdown === index;
          const menuId = `nav-submenu-${index}`;
          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(index)}
              onMouseLeave={() => setOpenDropdown(null)}
              onBlur={(event) => {
                const nextTarget = event.relatedTarget as Node | null;
                if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
                  setOpenDropdown(null);
                }
              }}
            >
              <button
                className={`flex items-center gap-2 text-sm font-semibold transition transform-gpu hover:scale-105 ${
                  childActive ? 'text-gold-400' : 'text-night-900'
                }`}
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-controls={menuId}
                type="button"
                onClick={() => setOpenDropdown(isOpen ? null : index)}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') {
                    setOpenDropdown(null);
                  }
                }}
              >
                {item.label}
                <span className={`transition ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                  v
                </span>
              </button>
              <div
                id={menuId}
                aria-label={item.label}
                aria-hidden={!isOpen}
                className={`absolute left-0 top-full z-20 min-w-[220px] rounded-2xl border border-white/70 bg-white/95 p-3 shadow-magic transition duration-200 ${
                  isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
                }`}
              >
                <ul className="space-y-2">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        className={`block rounded-xl px-3 py-2 text-sm transition transform-gpu hover:scale-[1.02] ${
                          isActive(child.href)
                            ? 'bg-blush-100 text-gold-500'
                            : 'text-night-800 hover:bg-blush-100'
                        }`}
                        href={child.href}
                        onClick={handleNavigate}
                        aria-current={isActive(child.href) ? 'page' : undefined}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        }

        return (
          <li key={item.label}>
            <Link
              className={`inline-block text-sm font-semibold transition transform-gpu hover:scale-105 ${
                isActive(item.href) ? 'text-gold-400' : 'text-night-900 hover:text-gold-400'
              }`}
              href={item.href ?? '#'}
              onClick={handleNavigate}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const socialIcons = [FaTiktok, FaInstagram, FaFacebookF];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (!open) {
      document.body.style.overflow = '';
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }

    document.body.style.overflow = 'hidden';
    const focusable = menuRef.current?.querySelectorAll<HTMLElement>('a, button');
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
      if (event.key === 'Tab' && focusable && focusable.length > 0) {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-[#f2cfd3] transition ${
        scrolled ? 'bg-[#FAE6E7]/90 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center" aria-label={siteContent.brandName}>
          <span className="font-brand text-2xl leading-none text-night-900 whitespace-nowrap">
            {siteContent.brandName}
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Navigation principale">
          <NavLinks />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {siteContent.socialLinks.map((link, index) => {
            const Icon = socialIcons[index] ?? FaFacebookF;
            return (
            <a
              key={link.href}
              href={link.href}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-200 bg-white text-night-800 shadow-sm hover:bg-gold-50"
              aria-label={link.label}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          );
          })}
        </div>

        <button
          className="lg:hidden rounded-full border border-gold-200 bg-white px-4 py-2 text-xs font-semibold"
          onClick={() => setOpen(true)}
          aria-label={siteContent.labels.openMenu}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {siteContent.labels.openMenu}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-night-900/40 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div
            id="mobile-menu"
            ref={menuRef}
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-white/95 px-6 py-6 shadow-magic"
          >
            <div className="flex items-center justify-between">
              <span className="font-brand text-2xl leading-none text-night-900 whitespace-nowrap">
                {siteContent.brandName}
              </span>
              <button
                className="rounded-full border border-gold-200 px-3 py-2 text-xs font-semibold"
                onClick={() => setOpen(false)}
                aria-label={siteContent.labels.closeMenu}
              >
                {siteContent.labels.closeMenu}
              </button>
            </div>
            <div className="mt-8 space-y-6">
              <nav aria-label="Navigation principale">
                <NavLinks onNavigate={() => setOpen(false)} />
              </nav>
              <div className="flex gap-3">
                {siteContent.socialLinks.map((link, index) => {
                  const Icon = socialIcons[index] ?? FaFacebookF;
                  return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-200 text-night-800"
                    aria-label={link.label}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
