# QA

## Release QA

For meaningful UI changes inspect:
- desktop first viewport
- tablet transition
- mobile first viewport
- typography scale and wrapping
- image crops and aspect ratios
- section overlap boundaries
- shadow/elevation hierarchy
- CTA prominence
- hover/focus/pressed states
- mobile menu
- accordion behavior
- reduced-motion behavior

## Required automated gate

Run:

```bash
npm run verify
```

No release should bypass the source verifier because it guards against the exact override-layer drift that previously distorted production.

## Evidence

Store durable release/visual evidence under `docs/evidence/` when it materially helps future agents reproduce or verify a release.
