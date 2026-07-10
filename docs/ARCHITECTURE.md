# Architecture

Miramar is a static-first Next.js App Router site. Pages import route-level
client compositions only where language switching, filtering, animation, form
validation, or the hero scene needs browser APIs.

```mermaid
flowchart TD
  A["app routes"] --> B["components/pages"]
  B --> C["components/sections"]
  C --> D["components/ui"]
  B --> E["content/site.ts"]
  C --> E
  B --> F["lib utilities"]
  A --> G["metadata, sitemap, robots"]
```

## Data Flow

```mermaid
flowchart LR
  C["Typed bilingual content"] --> P["Page compositions"]
  L["LanguageProvider"] --> P
  P --> S["Reusable sections"]
  S --> U["UI primitives"]
  F["Contact form values"] --> M["mailto fallback"]
```

## Runtime Boundaries

- Server route files own metadata and static route generation.
- Client components handle language state, form validation, equipment filters,
  motion, and Three.js rendering.
- No paid API, database, CMS, or backend service is required.
