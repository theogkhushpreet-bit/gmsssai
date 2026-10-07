# Bharat Jeevan AI Resource Repository

This folder is the reusable data layer for the Bharat Jeevan AI prototype.

## Files
- `schemes.json` — official scheme-discovery references.
- `services.json` — official citizen-service references.
- `eligibility-rules.json` — prototype rule structure for matching profile signals to resources.

## Important
The repository intentionally separates **profile data**, **resource references**, and **eligibility rules**. This makes it possible to replace or update resource records without rewriting the dashboard UI.

Before production use, refresh every resource against its official source and add source dates/versioning.
