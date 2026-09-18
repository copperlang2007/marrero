# SECURITY

## Current attack surface

The production site is static:
- no server runtime
- no database
- no authentication
- no API keys
- no committed secrets
- no package/runtime dependencies

This intentionally keeps the technical attack surface small.

## User data

The inquiry form prepares an email in the visitor's local mail client. The site does not persist form data.

Do not collect or request sensitive health, financial, Medicare-identifying, or government-ID information through the email workflow.

## External resources

- Google Fonts
- allowlisted public Marrero images on `static.wixstatic.com`
- explicit outbound Marrero/podcast/Medicare destinations

New external scripts are prohibited unless explicitly reviewed and documented.

## Release review

For every material change:
- run `npm run verify`
- confirm no secrets were introduced
- review new external destinations
- review any change to form/data handling
