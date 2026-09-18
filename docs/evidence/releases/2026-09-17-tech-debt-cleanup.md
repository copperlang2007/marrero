# Technical Debt Cleanup — 2026-09-17

## Removed
- premium wrapper entrypoint
- alternate premium CSS/JS files
- Vercel redirect layer
- `site.css` and `hotfix.css` override files
- monolithic inline CSS/JS architecture
- stale docs claiming runtime code was absent
- placeholder-only test/script documentation

## Established
- single canonical production page
- dedicated canonical stylesheet and script
- explicit responsive design system
- focus, keyboard and reduced-motion guardrails
- zero-dependency verification
- Node built-in tests
- GitHub Actions CI
- external image-host allowlist
- performance loading hints
- current architecture/deployment/status documentation
- ADR and failure-memory prevention rule

## Production
Vercel production remains connected to `main`: https://marrero-three.vercel.app/
