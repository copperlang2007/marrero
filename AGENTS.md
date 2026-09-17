# AGENTS.md — Marrero Repository Operating Contract

## Read this first (in order)
1. `AGENTS.md`
2. `docs/STATUS.md`
3. `docs/PRODUCT_CONTRACT.md`
4. `docs/ARCHITECTURE.md`
5. Relevant ADRs in `docs/adr/`
6. Relevant implementation files
7. Recent test/QA evidence in `docs/evidence/`

## What Marrero Group is
Marrero Group LLC is a multi-line advisory and insurance-oriented organization with digital needs spanning insurance education/conversion, community presence, and recruiting.

## Product purpose
Provide a trustworthy public digital surface that helps visitors:
- understand service lines
- choose relevant paths (ACA, Medicare, life, retirement, recruiting, community, media)
- complete lead/contact/scheduling actions

## Business lines in scope
- ACA / individual and family health coverage
- Medicare Advantage and Medicare supplements
- Life insurance
- Retirement planning
- Quote and enrollment pathways
- Appointment scheduling
- Licensed and non-licensed agent recruiting
- Podcast / media
- Nonprofit and community work
- Sir Kendrick’s Smile for Autism
- About / founder / company story
- Testimonials
- Contact and lead capture

## Design direction (non-negotiable)
Preserve and improve approved Modern Legacy direction: premium claymorphic depth, warm ivory/forest/bronze palette, editorial serif voice, dimensional hierarchy, premium motion, and excellent mobile/desktop behavior.

## Repository architecture (current)
- Documentation-first operating spine exists under `docs/`.
- Application/runtime code is not yet present in this repository snapshot.
- Architecture and delivery guidance are documented so future implementation is deterministic.

## Development / build / test commands
Current baseline: no runnable app/test toolchain found.
- Required next action: add concrete commands once runtime code is introduced.
- Until then, do not claim build/test success for product code.

## Visual QA process
For meaningful UI changes, capture evidence for desktop + mobile and store under:
- `docs/evidence/screenshots/`
- `docs/evidence/journeys/`

## Deployment process
See `docs/DEPLOYMENT.md`. Do not mark production-ready without deployed URL verification and smoke checks.

## Documentation requirements
Update relevant docs on every meaningful change, especially:
- `docs/STATUS.md`
- `docs/DECISIONS.md` (+ ADR when decision is architectural/product-significant)
- `docs/TESTING.md`, `docs/QA.md`, `docs/SECURITY.md` when impacted

## Status update requirements
Keep `docs/STATUS.md` current with:
- current phase
- what works
- tested evidence
- blockers
- highest-leverage next actions

## ADR expectations
Use `docs/adr/` for meaningful architecture/product decisions (not trivial edits). Add index entry in `docs/DECISIONS.md`.

## Evidence requirements
No assertion without evidence. For claims of readiness, include:
- test command output
- visual QA artifacts
- deployment verification details

## Security rules
- Never commit secrets or tokens.
- Minimize PII collection.
- Verify third-party scripts, links, and form handling.

## Prohibited assumptions
Do not invent business, compliance, biographical, or deployment facts. Mark unverified details explicitly.

## Definition of done
Done means implemented, tested where possible, visually inspected where relevant, security-considered, documented, and status-updated with explicit residual risks.

## Orientation workflow for future agents
1. Read required files in order.
2. Confirm current repository state vs documented status.
3. Run available checks; preserve evidence.
4. Make focused change.
5. Update docs + evidence + decisions as needed.
