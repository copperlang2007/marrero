# ADR-0002 — Single Canonical Static Production Architecture

- **Status:** Accepted
- **Date:** 2026-09-17

## Context

The site accumulated multiple presentation generations and temporary override files. That produced conflicting breakpoints, distorted proportions, deployment ambiguity, and repeated regressions.

## Decision

Maintain exactly one production implementation:

- `index.html`
- `assets/styles.css`
- `assets/site.js`
- `favicon.svg`

Vercel serves the repository statically with no framework, build step, runtime package dependency, alternate entrypoint, or production override stylesheet.

Repository verification and CI enforce this structure.

## Alternatives considered

### Continue with inline monolithic HTML
Rejected because mixed HTML/CSS/JS increased change collision risk and made visual/behavior ownership unclear.

### Framework migration
Rejected because current requirements do not justify framework/runtime complexity.

### Layered premium/hotfix styles
Rejected because this was the direct source of responsive distortion and source-of-truth drift.

## Consequences

### Positive
- one source of truth
- simpler debugging
- lower runtime attack surface
- zero package/runtime dependency burden
- clearer agent ownership boundaries
- CI can detect architectural regression

### Trade-offs
- repeated HTML content is not componentized
- visual regression remains a human QA responsibility
- approved public media remains remotely hosted until owned originals are available

## Implementation implications

Future redesigns modify the canonical files directly. Alternate versions may exist only on explicit experimental branches, never alongside production on `main`.
