# Marrero Group Digital Platform

This repository is the **single canonical implementation** of the Marrero Group public website.

## Production

- Hosting: Vercel
- Production URL: https://marrero-three.vercel.app/
- Runtime: static HTML/CSS/JavaScript
- Build step: none
- Runtime dependencies: none
- Package dependencies: none

## Canonical implementation

There is one production implementation only:

- `index.html` — semantic page markup
- `assets/styles.css` — the only production visual system
- `assets/site.js` — the only production interaction/motion system
- `favicon.svg` — site icon

Alternate entrypoints, hotfix stylesheets, premium wrappers, and fallback visual systems are prohibited.

## Verification

```bash
npm run verify
```

This runs:
- source integrity checks
- JavaScript syntax validation
- Node built-in tests

CI runs the same verification on pushes to `main` and pull requests.

## Architecture principles

- one source of truth
- zero runtime framework/dependency overhead
- fluid responsive proportions
- accessible keyboard/focus behavior
- reduced-motion support
- no fabricated business/compliance facts
- no dead-end or fake-success conversion behavior
- no untracked visual override layers

## External dependencies

The site intentionally uses:
- Google Fonts for typography
- approved Marrero Group public images hosted on `static.wixstatic.com`
- existing Marrero Group scheduling/community URLs

External image hosts are constrained by repository verification.

## Agent onboarding

Read in order:
1. `AGENTS.md`
2. `docs/STATUS.md`
3. `docs/PRODUCT_CONTRACT.md`
4. `docs/ARCHITECTURE.md`
5. relevant ADRs
6. implementation files
7. recent evidence
