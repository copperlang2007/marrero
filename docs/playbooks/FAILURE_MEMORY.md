# FAILURE MEMORY

## 2026-09-17 — Visual override accumulation distorted production

### Symptom
The Vercel site looked stretched, inconsistent across breakpoints, and less premium than the approved reference.

### Root cause
The repository accumulated multiple generations of presentation logic: the original page CSS, premium override CSS, wrapper/redirect entrypoints, and later hotfix styles. Each solved a local symptom while leaving the old system in place.

### Incorrect assumption
A premium design could be safely layered over an older layout using increasingly specific overrides.

### Successful fix
Rebuild the layout as one responsive system, then extract it into:
- `index.html`
- `assets/styles.css`
- `assets/site.js`

Delete all alternate entrypoints and visual override files.

### Prevention rule
Never fix production design by adding a second stylesheet or alternate page. Modify the canonical source, run `npm run verify`, and let CI reject stale implementation references.

### Reusable lesson
When UI quality degrades after repeated patches, treat competing layout systems as an architecture defect—not a styling defect.
