# AGENTS.md — Marrero Repository Operating Contract

## Required read order
1. `AGENTS.md`
2. `docs/STATUS.md`
3. `docs/INFORMATION_ARCHITECTURE.md`
4. `docs/CONTENT_PROVENANCE.md`
5. `docs/PRODUCT_CONTRACT.md`
6. `docs/ARCHITECTURE.md`
7. relevant ADRs
8. implementation files

## Product

Marrero Group’s public site serves insurance clients, Medicare clients, life/retirement clients, prospective agents, podcast listeners and community/nonprofit audiences.

## Canonical architecture

The site is intentionally multi-page, but it has only one production design/behavior system.

Shared canonical assets:
- `assets/styles.css`
- `assets/site.js`
- `favicon.svg`

Canonical routes are documented in `docs/INFORMATION_ARCHITECTURE.md`.

Do not create:
- alternate visual implementations of the same page
- premium/legacy variants
- hotfix stylesheets
- temporary override layers
- duplicate competing route versions

Adding a legitimate first-party content page is allowed when it belongs to the documented information architecture and uses the canonical shared assets.

## Commands

```bash
npm run verify
```

This is the release gate and validates every HTML route.

## Content rules

- preserve verified business facts
- never invent licensing/carrier relationships, compensation, programs, event dates, testimonials or compliance claims
- use `docs/CONTENT_PROVENANCE.md` for migrated content
- unknown/currently changing program details should be routed to contact rather than guessed

## Design contract

Preserve the Modern Legacy system: deep forest, ivory, bronze/champagne, editorial serif typography, restrained physical depth, fluid proportions and intentional mobile composition.

## Definition of done

- route exists in canonical information architecture
- shared assets used
- `npm run verify` passes
- production route returns successfully if deployed
- navigation and related CTAs point internally where appropriate
- docs updated when route architecture changes
