# Marrero Group LLC Digital Platform

This repository is the canonical implementation and operating memory for Marrero Group LLC's public website and digital operating surface.

## Mission
Deliver and maintain a production-grade, AI-native website and operational repository that is safe to evolve by future engineers and coding agents.

## Current Baseline (audited)
- Runtime application code: **not present yet** in this repository snapshot.
- Test/build tooling: **not present yet** in this repository snapshot.
- Existing content at audit start: `README.md` with project name and domain only.

See `/docs/STATUS.md` for current phase, blockers, and next actions.

## Required onboarding order
1. `/AGENTS.md`
2. `/docs/STATUS.md`
3. `/docs/PRODUCT_CONTRACT.md`
4. `/docs/ARCHITECTURE.md`
5. relevant ADRs in `/docs/adr/`
6. relevant implementation files
7. recent test/QA evidence in `/docs/evidence/`

## Working agreements
- Do not invent business facts, compliance claims, biographies, ratings, or contact details.
- Mark unknown or unverified information explicitly as unverified.
- Preserve approved “Modern Legacy” design direction; do not flatten to generic SaaS styling.
- Every meaningful change must leave test/QA/security evidence.

## Repository map
- `AGENTS.md` / `CLAUDE.md`: agent operating contract
- `.github/copilot-instructions.md`: repository-wide Copilot instructions
- `docs/`: product, architecture, design, QA, deployment, security, compliance, runbooks, decisions, evidence
- `tests/`: automated tests (to be established with app code)
- `scripts/`: repository automation scripts (to be added with concrete workflows)
