# DESIGN SYSTEM

## Direction

Luxury Modern Legacy: founder-led editorial credibility with dimensional ivory clay, deep forest lacquer/glass, champagne/bronze metal, restrained physical depth and deliberate whitespace.

## Authorship standard

Marrero must feel authored rather than themed. The product includes:
- a Marrero-specific identity moment
- the Marrero Compass decision experience
- recognizable MG monogram behavior
- proprietary positioning language
- deliberate editorial sequencing
- interaction patterns tied to decision-making rather than decoration

INSUREitALL is a separate client brand. Never reuse its assets, copy, product identities, colors or specific brand motions. Benchmark the rigor, not the identity.

## Canonical implementation

All production design lives in `assets/styles.css`. All behavior lives in `assets/site.js`. Do not add visual override stylesheets or alternate entrypoints.

## Core tokens

The stylesheet defines:
- ivory/paper surfaces
- forest surfaces
- champagne/bronze accents
- ink/muted text
- bounded shell width
- radius hierarchy
- paper and dark elevation recipes
- shared easing

## Proportion rules

- typography and spacing use fluid `clamp()`
- content widths are bounded
- media/card dimensions use explicit aspect ratios
- mobile uses recomposed layouts instead of scaled desktop geometry
- perspective response is limited to fine-pointer devices and kept subtle
- motion never controls content availability
- only priority surfaces receive strong depth

## Elevation

- Level 0: editorial background/content
- Level 1: subtle paper surface
- Level 2: interactive clay surface
- Level 3: conversion/decision surface
- Level 4: hero/identity composition

Not every element should float.

## Motion language

- identity: reveal, line extension, restrained seal/monogram movement
- section entrance: low-distance opacity/translate reveal
- pointer response: only a few pixels/degrees
- buttons: physical press/light sweep
- reduced motion: immediate visibility, no parallax/tilt

## Accessibility

- visible `:focus-visible` ring
- reduced-motion support
- keyboard-close mobile menu
- modal intro isolates background chrome while active
- accordion ARIA relationships
- native button semantics in decision controls
- adequate touch targets
