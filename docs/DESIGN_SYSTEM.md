# DESIGN SYSTEM

## Direction

Luxury Modern Legacy: editorial financial-advisory credibility with dimensional ivory clay, deep forest lacquer/glass, and champagne/bronze metal accents.

## Canonical implementation

All production design lives in `assets/styles.css`. Do not add visual override stylesheets.

## Core tokens

The stylesheet defines:
- paper/ivory surfaces
- forest surfaces
- gold/bronze accents
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
- perspective response is limited to fine-pointer devices
- motion never controls content availability

## Elevation

- Level 0: editorial background/content
- Level 1: subtle paper surface
- Level 2: interactive clay card
- Level 3: conversion/featured panel
- Level 4: hero composition

Not every element should float.

## Accessibility

- visible `:focus-visible` ring
- reduced-motion support
- keyboard-close mobile menu
- accordion ARIA relationships
- adequate touch targets
