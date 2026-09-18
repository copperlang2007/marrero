# TESTING

## Commands

```bash
npm run check
npm test
npm run verify
```

## Layers

### Source verification
`scripts/verify.mjs` checks production invariants:
- required canonical files
- no inline CSS/JS override layers
- canonical asset references
- unique IDs
- valid fragment targets
- image alt text
- safe `target="_blank"` usage
- no stale alternate implementation references
- focus-visible support
- reduced-motion support
- keyboard/mobile-menu guardrails
- accordion ARIA wiring
- HTTPS resources
- approved external image hosts

### Automated tests
`tests/site.test.mjs` uses Node's built-in test runner. No third-party test dependency is required.

### Syntax
`node --check assets/site.js` protects production JavaScript parsing.

## CI

`.github/workflows/ci.yml` runs `npm run verify` on:
- pushes to `main`
- pull requests

## Visual QA

Automated source checks do not prove visual quality. Meaningful design changes require desktop/mobile inspection against the approved luxury reference.
