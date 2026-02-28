---
name: amazon-nova-docs
description: Read and interpret the official Amazon Nova documentation from docs.aws.amazon.com. Use when Codex needs authoritative answers about Amazon Nova features, model families, APIs, setup, Bedrock integration, SageMaker customization, Nova Act, release notes, or version-specific behavior across Amazon Nova 1 and Amazon Nova 2.
---

# Amazon Nova Docs

## Overview

Use this skill to answer Amazon Nova questions from official AWS documentation only. Start from the AWS docs, determine whether the request targets Amazon Nova 1, Amazon Nova 2, or Amazon Nova Act, and cite the exact page used.

## Core Workflow

1. Identify the product surface before answering.
2. Use only official documentation under `docs.aws.amazon.com` unless the user explicitly asks for other sources.
3. Re-check the live docs for anything time-sensitive, especially pricing, regions, model availability, release notes, and "latest" claims.
4. Read [references/site-map.md](references/site-map.md) for the main documentation roots and search patterns.
5. Answer with the exact version or product called out explicitly.

## Version Routing

- Prefer the `nova2-userguide` pages when the user asks about reasoning, web grounding, code interpreter, or other newer capabilities.
- Prefer the `userguide` pages when the user clearly refers to Amazon Nova Version 1 or older model-specific guidance.
- Treat Nova Act as a separate product with its own docs root and terminology.
- If the user says only "Amazon Nova" and version is unclear, verify the doc path you are using and state the version in the answer.

## Response Rules

- Name the exact doc page or provide the URL when useful.
- Distinguish documented facts from your own recommendations or inferences.
- Do not rely on stale memorized model IDs, supported regions, or pricing.
- Keep quotes short and paraphrase the rest.
- When the Nova docs defer to Amazon Bedrock or SageMaker documentation, follow that link and say that the source of truth lives there.

## Scope Guardrails

- Use this skill for documentation lookup and interpretation, not for building full applications by itself.
- If the user wants implementation help, use this skill to ground the answer in the docs first, then write or review code separately.
- If a page is ambiguous or missing, say what you found and what remains uncertain.
