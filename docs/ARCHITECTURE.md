# ARCHITECTURE

## Runtime model

The site is a framework-free static multi-page application.

Shared runtime:

```text
assets/styles.css
assets/site.js
favicon.svg
```

Page routes are committed as directory `index.html` files and served directly by Vercel.

## Route model

```text
/
├── index.html
├── services/index.html
├── insurance/index.html
├── medicare/index.html
├── life-retirement/index.html
├── agents/index.html
├── podcast/index.html
├── community/index.html
├── sir-kendrick/index.html
├── about/index.html
├── schedule/index.html
└── contact/index.html
```

All pages use the same stylesheet and JavaScript. Multiple content routes are legitimate; multiple competing design implementations are not.

## Responsibilities

### HTML routes
Own semantic structure, page-specific content, links, forms and page metadata.

### assets/styles.css
Owns the entire production visual system and responsive behavior.

### assets/site.js
Owns progressive enhancement: mobile navigation, accordions, Marrero Compass, intro behavior and email-preparation forms.

### vercel.json
Owns legacy URL migration only. It must not be used to hide alternate visual implementations.

## Deployment

Vercel serves the repository statically with no compile step.

## Verification

`scripts/verify.mjs` recursively checks every HTML page for canonical assets, duplicate IDs, broken fragments, broken first-party routes, unsafe external links, unapproved remote media and other production invariants.
