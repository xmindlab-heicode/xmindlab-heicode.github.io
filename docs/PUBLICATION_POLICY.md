# Public Documentation Publication Policy

## Purpose

This repository publishes the user-facing documentation for `docs.heicode.cc`.

## Source hierarchy

- `heicodeDocs` is the internal source of truth for standards and product knowledge.
- This repository is the reviewed public release layer.
- Public documentation must only describe released and verified behavior.

## Must not publish

- Internal architecture decisions
- Unreleased roadmap commitments
- Customer data
- Credentials, tokens, secrets
- Private infrastructure details
- Internal-only screenshots

## Review requirements

The following topics require additional ownership review:

- Authentication and device identity
- Billing and pricing
- Privacy and compliance
- Security behavior
- Agent and Swarm capabilities
- Client and CLI behavior

## Architecture changes

Changes that introduce new contracts or architecture commitments must have an approved ADR before publication.
