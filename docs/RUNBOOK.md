# RUNBOOK

## Session start
1. Read `AGENTS.md`.
2. Read `docs/STATUS.md`.
3. Confirm repo state matches the documented canonical architecture.
4. Run `npm run verify` before material work when practical.

## Change workflow
1. Modify only the canonical implementation.
2. Do not create alternate visual entrypoints or temporary override stylesheets.
3. Run `npm run verify`.
4. Inspect desktop/mobile for meaningful UI changes.
5. Push/merge.
6. Confirm CI and Vercel production state.
7. Update status/ADR/failure memory when applicable.

## Incident: visual distortion
Check first for:
- more than one production stylesheet
- inline style overrides
- stale hotfix files
- competing breakpoints
- unbounded viewport units
- image aspect-ratio/object-position regressions

Fix the canonical source. Do not layer another override on top.

## Rollback
Revert the causal commit or use Vercel rollback. Never resurrect an alternate implementation.
