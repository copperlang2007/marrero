# ADR-0003 — First-Party Multi-Page Information Architecture

- **Status:** Accepted
- **Date:** 2026-09-21
- **Supersedes:** ADR-0002 only where ADR-0002 implied the production site contained only `index.html` as a content route.

## Context

The redesigned homepage still depended on the old Wix site for core journeys such as agent recruiting, community/nonprofit information, Sir Kendrick’s Smile, scheduling and detailed service content. This created brand discontinuity, migration risk and unnecessary dependency on the legacy site.

## Decision

Marrero will remain framework-free and static, but will use multiple first-party HTML routes sharing one canonical visual and behavior system.

Shared:
- `assets/styles.css`
- `assets/site.js`
- `favicon.svg`

Content routes are documented in `docs/INFORMATION_ARCHITECTURE.md`.

Legacy Wix paths are preserved through permanent redirects in `vercel.json`.

## Guardrail

“Single canonical implementation” means one design/behavior system and one authoritative version of each route. It does **not** mean the website must be a single HTML page.

## Consequences

### Positive
- core user journeys remain first-party
- stronger SEO and page-specific metadata
- legacy links can migrate cleanly
- content is easier to understand and maintain
- the homepage no longer has to contain every business function

### Trade-offs
- shared header/footer markup is repeated in static HTML
- route verification must run recursively
- navigation changes require coordinated updates across pages unless a future build system is deliberately adopted

## Verification

The source verifier recursively checks all HTML pages and internal first-party routes. GitHub Actions runs the full verification gate on every push to `main`.
