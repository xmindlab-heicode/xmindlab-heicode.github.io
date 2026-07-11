# Heicode Public Documentation Standard

## Purpose

This repository is the public documentation delivery site for Heicode (`docs.heicode.cc`). It publishes verified, user-facing documentation only.

## Source of Truth

- `heicodeDocs` is the internal documentation and standards source.
- This repository is the reviewed public release layer.
- Internal architecture decisions, unpublished roadmap items, credentials, customer data, and private implementation details must not be published here.

## Documentation Rules

Every public document should:

- Describe released or explicitly previewed capabilities only.
- Avoid promises about unfrozen architecture decisions.
- Match real product behavior.
- Include version applicability when behavior depends on client versions.
- Keep English and Chinese content semantically aligned.

## Review Requirements

Changes involving the following require domain owner review:

- Authentication, device identity, permissions: Manager/Client owner.
- Billing and plans: Billing owner.
- Agent and Swarm capabilities: Agent owner.
- Privacy and security: Security owner.

Architecture decisions that affect multiple repositories must be recorded as ADRs before becoming public commitments.

## Security

Never publish:

- Secrets or credentials.
- Real customer data.
- Internal IP addresses.
- Private screenshots containing user information.
- Unreleased product capabilities.
