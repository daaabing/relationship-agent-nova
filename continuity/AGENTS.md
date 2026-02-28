# AGENTS.md (Map, not encyclopedia)

## North Star

Build "Continuity" v1:
Apple Notes -> Open Loop Inbox -> Done/Dismiss -> Meeting Prep

Scope is defined in:
docs/product/v1_scope.md

---

## Source of Truth

Product:
- docs/product/vision.md
- docs/product/v1_scope.md
- docs/product/acceptance_criteria.md

Architecture:
- ARCHITECTURE.md

Engineering:
- docs/engineering/stack.md
- docs/engineering/repo_conventions.md
- docs/engineering/quality_bar.md

Evaluation:
- docs/evals/golden_tests.md
- docs/evals/fixtures/

---

## Rules

1. Always read relevant docs before writing code.
2. Every PR must:
   - Include Intent summary
   - Link to acceptance criteria
   - Add/update tests
3. Keep PRs small and short-lived.
4. Prefer follow-up PRs over blocking progress.
5. Every reasoning output must be traceable to original text evidence.

---

## Output format

When proposing changes, include:
- Proposed files touched
- Test plan
- Risk & rollback notes
