# AGENTS.md — Marrero Repository Operating Contract

## Required read order
1. `AGENTS.md`
2. `docs/STATUS.md`
3. `docs/PRODUCT_CONTRACT.md`
4. `docs/ARCHITECTURE.md`
5. relevant ADRs in `docs/adr/`
6. implementation files
7. recent evidence in `docs/evidence/`

## Product

Marrero Group's public site serves:
- ACA / individual and family health coverage
- Medicare education and plan conversations
- life insurance
- retirement planning
- quote/contact/scheduling pathways
- agent recruiting
- podcast/media
- nonprofit/community work
- Sir Kendrick's Smile for Autism
- founder/company story
- testimonials

## Canonical architecture

Only one website implementation may exist:
- `index.html`
- `assets/styles.css`
- `assets/site.js`
- `favicon.svg`

Do not create:
- alternate HTML entrypoints
- premium/legacy variants
- hotfix stylesheets
- temporary visual override files
- duplicate production implementations

If a redesign is approved, modify the canonical files directly.

## Commands

```bash
npm run check
npm test
npm run verify
```

`npm run verify` is the release gate.

## Design contract

Preserve the approved luxury Modern Legacy direction:
- warm ivory clay surfaces
- deep forest lacquer/glass
- champagne/bronze metal accents
- editorial serif hierarchy
- controlled realistic depth
- fluid proportions
- restrained motion
- intentional mobile composition

Do not flatten the site into generic SaaS cards and do not use arbitrary perspective, shadows, or breakpoint overrides.

## Engineering rules

- evidence before assertion
- no fabricated business, compliance, licensing, testimonial, or founder facts
- no secrets in the repo
- no dead links or fake-success forms
- all meaningful UI changes must preserve desktop/mobile behavior
- external image hosts must remain allowlisted in `scripts/verify.mjs`
- update `docs/STATUS.md` after meaningful work
- record architectural decisions in `docs/adr/`
- document repeatable failures in `docs/playbooks/FAILURE_MEMORY.md`

## Definition of done

A change is complete only when:
- implementation is in the canonical files
- `npm run verify` passes
- deployed production behavior is checked when deployment is affected
- accessibility/security/compliance implications are considered
- docs reflect repository reality
- no alternate implementation or stale override layer was introduced
