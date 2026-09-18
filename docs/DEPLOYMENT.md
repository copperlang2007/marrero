# DEPLOYMENT

## Production contract

- Provider: Vercel
- Source: `copperlang2007/marrero`
- Branch: `main`
- Production URL: https://marrero-three.vercel.app/
- Framework/build command: none
- Output directory: repository root
- Environment variables: none currently required

Every push to `main` produces a production deployment through the connected Vercel project.

## Release flow

1. Make changes only to the canonical implementation.
2. Run `npm run verify`.
3. Push/merge to `main`.
4. Confirm GitHub Actions passes.
5. Confirm the newest Vercel production deployment reaches `READY`.
6. Smoke-check the production URL.
7. Update `docs/STATUS.md` when the change is meaningful.

## Rollback

Use Vercel's prior production deployment/rollback capability or revert the responsible Git commit. Do not restore removed alternate visual files as a rollback mechanism.

## Post-deploy checks

Verify:
- homepage returns HTTP 200
- canonical CSS/JS are referenced
- no stale visual overrides are loaded
- primary navigation/CTA targets remain present
- Vercel reports no runtime errors
