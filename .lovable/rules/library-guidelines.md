# Connect & Create — Guidelines

## Components

The design system exports these components — import them from `@ws-ozwcz9rkgxwbpakj7xtd/bd3ccc17-61ac-40c1-8efd-13efffbb4936` and compose them before building anything from scratch:

`Button`, `Constants`, `CycleWheel`, `EvidenceLadder`, `Flourish`, `FounderAffiliations`, `FounderDomains`, `FounderFigures`, `FounderGrants`, `FounderPatents`, `FounderPublications`, `HealthspanCurve`, `Kicker`, `ParticipantOrbit`, `PathwayTrack`, `PillarPage`, `SectionHead`, `Section`, `SiteFooter`, `SiteHeader`, `StageChain`, `SystemsRings`, `Tag`, `TranslationFlywheel`

Per-component details (import stanzas, props, variants, examples) live in `.lovable/rules/libraries/{slug}/components.md` — on disk, not auto-loaded. Read that file or the component source when the name alone isn't enough.

## Theme Files

The design system's theme is delivered through the following files. The author's original source files carry the full wiring the design system needs — variable declarations, framework-specific directives, provider objects, etc. — and are the canonical import target.

- `@ws-ozwcz9rkgxwbpakj7xtd/bd3ccc17-61ac-40c1-8efd-13efffbb4936/styles.css` (source — preferred import)
- `@ws-ozwcz9rkgxwbpakj7xtd/bd3ccc17-61ac-40c1-8efd-13efffbb4936/dist/tokens.css` (auto-generated flat list of CSS custom properties — a raw-values fallback only; does NOT carry framework-specific wiring that the source files above provide)

