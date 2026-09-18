# ARCHITECTURE

## Runtime model

The site is intentionally static and framework-free.

```text
index.html
├── assets/styles.css
├── assets/site.js
└── favicon.svg
```

Vercel serves these files directly. There is no compile step, framework runtime, package dependency, alternate entrypoint, or generated production directory.

## Responsibilities

### index.html
Owns semantic structure, verified content, links, forms, and accessibility attributes that belong in markup.

### assets/styles.css
Owns all presentation:
- responsive layout
- design tokens
- elevation/material system
- typography
- focus states
- reduced-motion behavior

No secondary stylesheet may override production design.

### assets/site.js
Owns progressive enhancement only:
- mobile navigation state/focus
- accordion state and ARIA wiring
- inquiry mailto preparation
- reveal motion
- fine-pointer depth response

Core content remains readable without JavaScript.

## Responsive model

Breakpoints:
- desktop: >1180px
- compact desktop/tablet: <=1180px
- tablet: <=900px
- mobile: <=620px

Fluid sizing uses `clamp()`, bounded shells, explicit media/card aspect ratios, and composition changes rather than proportional shrinking.

## External boundaries

- fonts: Google Fonts
- media: allowlisted `static.wixstatic.com`
- scheduling/community/podcast: existing external Marrero destinations
- deployment: Vercel

## Guardrails

`npm run verify` prevents:
- inline CSS/JS override layers
- stale alternate implementation names
- duplicate IDs
- broken fragment links
- unsafe blank-target links
- missing image alt text
- unapproved external image hosts
- missing accessibility motion/focus guardrails
