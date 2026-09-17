# SECURITY

## Non-negotiables
- Never commit secrets (keys, tokens, credentials, certs).
- Use platform secret management for sensitive values.
- Minimize user-submitted data collection.

## Required reviews for implementation changes
- dependency risk review
- external script/link review
- form endpoint/data handling review
- exposure of environment/configuration review

## Current baseline
No runtime code present to perform application-layer security audit in this snapshot.
