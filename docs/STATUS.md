# STATUS

- **Current phase:** Production hardening / debt prevention
- **Canonical implementation:** `index.html` + `assets/styles.css` + `assets/site.js`
- **Production:** https://marrero-three.vercel.app/
- **Hosting:** Vercel, connected to `main`
- **Last major architecture change:** Rebuilt the site as one responsive luxury system, then extracted CSS/JS into canonical assets and removed alternate/hotfix visual layers.
- **What works:** responsive navigation, service discovery, accordions, community/podcast links, phone/email/scheduling pathways, mailto inquiry preparation, reduced-motion behavior, keyboard-close mobile menu.
- **Verification:** zero-dependency source verifier, JavaScript syntax check, Node built-in tests, GitHub Actions CI.
- **Known technical debt:** none intentionally carried in the code architecture.
- **Explicit external dependencies:** Google Fonts; allowlisted Marrero public media on `static.wixstatic.com`; existing external Marrero scheduling/community/podcast pages.
- **Product limitation (not hidden debt):** inquiry form prepares email instead of writing to a CRM/backend.
- **Visual QA requirement:** meaningful UI changes still require human desktop/mobile inspection; source CI does not substitute for visual judgment.
- **Next highest-leverage work:** replace remote media with owned optimized local assets when approved originals are available; connect inquiry handling to an approved secure lead destination when business requirements are defined.
- **Last updated:** 2026-09-17
