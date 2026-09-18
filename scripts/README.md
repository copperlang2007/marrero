# Scripts

`npm run check` runs the zero-dependency source verifier and JavaScript syntax validation.

The verifier protects the single canonical implementation against:
- inline CSS/JS override layers
- missing canonical assets
- duplicate IDs
- broken in-page links
- missing image alt text
- unsafe `target="_blank"` links
- stale alternate implementation references
- missing focus/reduced-motion/keyboard accessibility guardrails
- insecure HTTP resources
