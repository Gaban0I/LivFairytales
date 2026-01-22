# Livprincesse Site (Placeholder)

This is a Next.js (App Router) + TypeScript + Tailwind CSS placeholder site. All copy, labels, and links are configurable in a single file.

## Quick start

```bash
npm install
npm run dev
```

## Replace placeholders (content, links, labels)

All editable text, labels, routes, and URLs live in:

- `src/content/siteContent.ts`

Search for `{{PLACEHOLDER}}` tokens and replace them with your real values.

## Replace images

Image paths are placeholders like:

- `/images/placeholder-hero.png`
- `/images/placeholder-gallery-1.png`

Place your images in:

- `public/images/`

Then update the paths in `src/content/siteContent.ts` if you change filenames.

## Navigation and footer

- Header navigation and footer columns are configured in `src/content/siteContent.ts`.
- Social links also live there.

## Forms

The contact form is UI-only and shows a placeholder success message. The secondary button can open a `mailto:` URL (configured in `siteContent.ts`).

## SEO metadata

Each page exports metadata using placeholders from `src/content/siteContent.ts` (title, description, OpenGraph image).

## Design system

Reusable UI components are in:

- `src/components/ui`

Global styles are in:

- `src/styles/globals.css`

Tailwind theme tokens are in:

- `tailwind.config.ts`

## Animations

Animations are powered by Framer Motion and reusable motion helpers:

- `src/components/motion/Reveal.tsx`
- `src/components/motion/Stagger.tsx`
- `src/components/motion/MagicButton.tsx`
- `src/components/motion/SparkleDivider.tsx`

### Usage

- Wrap sections with `<Reveal>` for scroll animations.
- Wrap grids with `<Stagger>` and each item with `<StaggerItem>`.
- Use `<MagicButton>` for primary CTAs.

### Reduced motion

Animations respect `prefers-reduced-motion`. To test:

- macOS: System Settings → Accessibility → Display → Reduce motion
- Windows: Settings → Accessibility → Visual effects → Animation effects
