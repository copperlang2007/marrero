# STATUS

- **Current phase:** First-party site completion / migration hardening
- **Production:** https://marrero-three.vercel.app/
- **Hosting:** Vercel, connected to `main`
- **Architecture:** static multi-page site with one canonical visual/behavior system
- **First-party routes live:** Home, Services, Insurance, Medicare, Life & Retirement, Agents, Podcast, Community, Sir Kendrick’s Smile, About, Schedule, Contact
- **Legacy route migration:** old Wix-era paths redirect to new equivalents through `vercel.json`
- **Homepage:** authored MG identity intro, Marrero Compass, service/founder/career/community/media/testimonial/contact surfaces
- **Forms:** Contact and Schedule prepare email requests locally; they do not store sensitive data or pretend a CRM/backend exists
- **Verification:** full-site recursive source verifier + Node tests + GitHub Actions CI
- **Current CI:** passing after full page build
- **Production route checks:** all first-party routes return HTTP 200
- **Known product limitation:** no approved backend/CRM destination for inquiry persistence
- **External dependencies:** Google Fonts, approved Marrero Wix-hosted imagery, Power Play Radio, Medicare.gov, existing Jotform application
- **Next highest-leverage work:** move to approved custom domain when ready; replace remote imagery with owned optimized originals; connect inquiries to an approved secure destination; add verified founder/community photography
- **Last updated:** 2026-09-21
