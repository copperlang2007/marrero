# Marrero Group Digital Platform

This repository is the canonical implementation of the Marrero Group PLLC public website.

## Production

- Hosting: Vercel
- Production URL: https://marrero-three.vercel.app/
- Runtime: static HTML/CSS/JavaScript
- Build step: none
- Runtime/package dependencies: none

## Canonical architecture

There is one visual/behavior system shared across multiple first-party content routes.

Core shared assets:
- `assets/styles.css` — only production visual system
- `assets/site.js` — only production interaction system
- `favicon.svg`

First-party routes:
- `/`
- `/services/`
- `/insurance/`
- `/medicare/`
- `/life-retirement/`
- `/agents/`
- `/podcast/`
- `/community/`
- `/sir-kendrick/`
- `/about/`
- `/schedule/`
- `/contact/`

These pages are not alternate implementations. They are the canonical information architecture.

## Legacy-route migration

`vercel.json` permanently redirects the old Wix-era paths to their new first-party equivalents so existing links can continue to work.

## Verification

```bash
npm run verify
```

The verification gate checks every HTML page and internal route. CI runs the same gate on pushes to `main` and pull requests.

## Principles

- one design system across all pages
- first-party core journeys
- no premium/legacy/hotfix visual variants
- no fabricated business or compliance claims
- responsive, accessible navigation
- content provenance documented
- Vercel production verified after structural changes

## Agent onboarding

Read:
1. `AGENTS.md`
2. `docs/STATUS.md`
3. `docs/INFORMATION_ARCHITECTURE.md`
4. `docs/CONTENT_PROVENANCE.md`
5. `docs/PRODUCT_CONTRACT.md`
6. `docs/ARCHITECTURE.md`
