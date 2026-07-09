# Miramar

Production rebuild of the Miramar company website, live at
[miramartr.vercel.app](https://miramartr.vercel.app).

Miramar is an Istanbul-based supplier and service provider for construction and
site development: construction materials, electrical and plumbing systems,
pumps, and site preparation support. The site keeps the verified business facts
from the previous version while upgrading the project into a modern, documented,
resume-ready Next.js codebase.

## Highlights

- Premium industrial visual system with graphite, steel, safety red, and amber accents.
- Bilingual English/Turkish interface with persisted language preference.
- Structured content layer separated from page and component code.
- Interactive hero visual with desktop Three.js scene and static fallback.
- Filterable equipment/material coverage.
- Validated RFQ contact flow using a no-cost `mailto:` fallback.
- App Router metadata, Open Graph/Twitter tags, sitemap, robots, and custom 404.
- Professional documentation with architecture, design, deployment, SEO, and component notes.
- Lint, typecheck, production build, and Playwright smoke-test scripts.

## Tech Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS 4
- Framer Motion
- Three.js / React Three Fiber / Drei
- Lucide React icons
- React Hook Form and Zod
- Playwright for smoke tests
- Vercel free-tier deployment

## Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

If Playwright browsers are missing on a fresh machine, run:

```bash
npx playwright install
```

## Project Structure

```text
app/                  Next.js routes, metadata, sitemap, robots
components/layout/    Site shell, navigation, footer
components/pages/     Route-level page compositions
components/sections/  Hero, service, process, contact, equipment modules
components/ui/        Reusable UI primitives
content/              Typed bilingual content and page data
docs/                 Architecture, design, deployment, SEO docs
lib/                  Constants, language types, small utilities
tests/e2e/            Playwright smoke tests
```

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Design System](docs/DESIGN_SYSTEM.md)
- [Components](docs/COMPONENTS.md)
- [Deployment](docs/DEPLOYMENT.md)
- [SEO & Accessibility](docs/SEO_ACCESSIBILITY.md)

## Screenshots

Final screenshot assets should be refreshed after visual QA:

- `docs/screenshots/home-desktop.png`
- `docs/screenshots/home-mobile.png`
- `docs/screenshots/contact-desktop.png`

## Deployment

The project is designed for GitHub + Vercel with no paid services, databases, or
external APIs. The contact form uses a validated `mailto:` flow by default, so it
does not require backend infrastructure or environment variables.

## Future Improvements

- Add real project photography if Miramar has approved assets.
- Add a configured free email provider only if real credentials and env vars are supplied.
- Add Turkish route alternates if a URL-level i18n strategy becomes a requirement.
- Add Lighthouse budget automation once production performance targets are locked.
