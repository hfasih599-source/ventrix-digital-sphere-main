# Services Dropdown + Dedicated Service Pages

## What you get

- The "Services" item in the navbar becomes a dropdown (hover on desktop, expandable accordion on mobile) listing the 5 practices, each with its sub-services beneath it.
- 5 category pages: Design, Engineering, Marketing, Creative, AI Automation.
- ~30 individual service pages (Logo Design, SEO, 3D Animation, SaaS Development, etc.), one per service, linked from its category page and from the dropdown.
- Every page has its own rich, service-specific copy, the same premium dark/magenta styling, a 3D ambient visual, and its own SEO title/description.
- All copy available in English, Arabic (RTL), German, Italian and French, using the existing language switcher.

## Page structure

```text
/services                        overview of all 5 practices
/services/design                 category page + list of its services
/services/design/logo-design     individual service page
/services/marketing/seo
/services/ai/ai-agents           ...and so on for every service
```

Each individual service page contains:
- Hero with service name, positioning line and dual CTA (WhatsApp / contact)
- "What's included" — 4-6 concrete deliverables written for that service
- "How we work" — the 4-step process, phrased for that service
- "Why Ventrix" — 3 differentiators specific to the service
- Related services from the same practice
- Service-specific FAQ (3-4 questions)
- Closing CTA with the phone numbers and Austin address

Category pages get their own hero, a grid of their services, and a practice-level pitch.

## Technical approach

- New content module `src/lib/services/catalog.ts`: one entry per service with `slug`, `categorySlug`, icon, and translation keys. This is the single source of truth for the dropdown, category pages, service pages and sitemap-style linking.
- Copy lives in the i18n dictionaries (`src/lib/i18n/translations.ts`) under a new `servicePages` section, keyed by service slug, added for all 5 languages. Existing keys untouched.
- Routes via TanStack file routing:
  - `src/routes/services/index.tsx`
  - `src/routes/services/$category.index.tsx`
  - `src/routes/services/$category.$service.tsx`
  - Unknown slugs throw `notFound()`.
- Shared presentation components under `src/components/ventrix/services/` (hero, deliverables grid, process, FAQ, related grid) so pages stay consistent without duplicating markup.
- Nav dropdown added to the existing `Nav` in `VentrixLanding.tsx`, extracted into a reusable `SiteHeader` so service pages share the same header/footer as the landing page.
- Each leaf route defines its own `head()` with unique title, description, og:title, og:description.
- Reuses the existing `AmbientShapes` 3D layer (lazy-loaded) for page visuals — no new 3D assets.

## Build order

1. Catalog + English `servicePages` copy for all services.
2. Shared service page components + routes (category and service).
3. Nav dropdown (desktop + mobile) and shared header/footer extraction.
4. Arabic, German, Italian, French copy for every service page.
