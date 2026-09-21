# Copilot Instructions — Marrero

## Architecture

Marrero is a canonical static multi-page site.

Shared production system:
- `assets/styles.css`
- `assets/site.js`
- `favicon.svg`

First-party route map lives in `docs/INFORMATION_ARCHITECTURE.md`.

Do not create alternate visual implementations, premium/legacy copies, hotfix CSS, or duplicate competing versions of an existing route. Legitimate new first-party pages are allowed when they extend the documented information architecture and use the shared design system.

## Required behavior

- preserve Modern Legacy luxury direction
- preserve responsive proportions
- keep core journeys first-party
- never fabricate regulated or business claims
- use content provenance before changing factual copy
- maintain keyboard/focus/reduced-motion accessibility
- never commit secrets

## Verification

Before completion:

```bash
npm run verify
```

The gate checks every HTML page and internal route. Meaningful UI changes also require desktop/mobile visual inspection.
