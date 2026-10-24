# Cifra

A bilingual landing page for a fictional AI-powered personal finance app — accounts, budgets, spend and insights in one place — built on a v0-generated Next.js + shadcn foundation and reworked into a self-hosted, production-ready site.

![Cifra landing page hero with the headline "Control your money with AI-powered insights", a background video, and the main navigation](docs/screenshot.webp)

## What it is

A one-page marketing site for a fictional fintech product: a video hero, social-proof metrics, a feature grid, a four-step "how it works" flow, a benefits section, a testimonial carousel, three pricing tiers, an integrations map, two blog teasers and a footer with a newsletter signup and CTA. The whole page is available in English and Spanish.

It is a presentation site, not a business application. There is no auth, database or payment backend: every call to action is a link placeholder and the newsletter input does not submit anywhere.

## Why this over the original template

- **One brand.** The template shipped with placeholder branding, mixed typefaces and scattered colours; everything was consolidated into Cifra — a single green accent (`#138E5E`), a deep-ink green (`#052618`), one logo and one consistent component naming scheme.
- **Self-hosted media.** All Unsplash/CDN imagery, fonts and integration logos were downloaded to `public/` so the site makes no remote asset requests at runtime.
- **Bilingual by default.** `/[locale]` routes, typed dictionaries, automatic `Accept-Language` detection with a cookie override, a manual switcher, and `hreflang` alternates.
- **Market rules in one file.** Region, currency, contact details and canonical origin live in `lib/site.ts` (Spain · Madrid · EUR).
- **English codebase.** Identifiers, comments and commit messages are in English; only user-facing copy is localized.
- **SEO ready.** Per-locale metadata, canonical URLs, `hreflang`, JSON-LD organization markup, `sitemap.xml`, `robots.txt` and a generated Open Graph image.

## Quick start

Requirements: Node.js 24 and pnpm.

```bash
pnpm install
pnpm dev         # http://localhost:3000
pnpm build       # production build (runs type checking)
pnpm start       # serve the production build
pnpm typecheck   # tsc --noEmit
```

## Internationalization

- Locales: `en` (default) and `es`.
- Locale detection runs in `proxy.ts`: cookie first, then the `Accept-Language` header, then the default.
- Routes are URL-based (`/en`, `/es`); a request to `/` is redirected to the detected locale.
- Copy lives in `i18n/dictionaries/` with a shared `Dictionary` type derived from the English source, so a missing key is a type error.
- Prices are formatted with `Intl.NumberFormat` and dates with `Intl.DateTimeFormat`, both per locale.

## Project structure

```
app/
  [locale]/
    layout.tsx          root layout, self-hosted fonts, JSON-LD
    page.tsx            composes the page sections
    opengraph-image.tsx generated social card
  icon.svg              brand favicon
  robots.ts
  sitemap.ts
components/
  brand/                logo and locale switcher
  sections/             the ten page sections
i18n/                   config, dictionaries, get-dictionary
lib/                    fonts, seo, site config
proxy.ts                locale detection and redirect
```

## Deployment

Deployed on Vercel at <https://cifra-money.vercel.app>. Set `NEXT_PUBLIC_SITE_URL` to the production origin so canonical URLs, `hreflang`, the sitemap, `robots.txt` and the Open Graph image resolve to the live domain (the site config falls back to that origin when the variable is absent).

## Status and scope

Adapted from a v0-generated template rather than rebuilt from scratch: the original page logic, animation choreography and layout were kept, then rebranded, localized and hardened as described above. The original template and shadcn base remain under the MIT License — see `THIRD-PARTY-NOTICES.md`.

## License

This project is proprietary. See [LICENSE](LICENSE).
