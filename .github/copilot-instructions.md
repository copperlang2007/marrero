# Copilot Instructions — Marrero

## Canonical production architecture
There is exactly one website implementation:
- `index.html`
- `assets/styles.css`
- `assets/site.js`
- `favicon.svg`

Never create alternate HTML entrypoints, premium/legacy variants, hotfix CSS, or competing visual systems. Modify the canonical source directly.

## Required behavior
- preserve luxury Modern Legacy design direction
- preserve fluid desktop/tablet/mobile proportions
- reuse existing tokens and elevation rules
- maintain keyboard/focus/reduced-motion accessibility
- never invent business/compliance/licensing/testimonial facts
- never present mock behavior as production behavior
- never commit secrets

## Verification
Before completion run:

```bash
npm run verify
```

Meaningful UI changes also require desktop/mobile visual inspection.

Update `docs/STATUS.md` and relevant ADR/failure memory when architectural state changes.
