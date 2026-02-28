# Repo Conventions

Directory layout:
- `frontend/` for Next.js app code
- `backend/` for FastAPI app code
- `shared/` for cross-service schemas and typed contracts
- `tests/` for integration and end-to-end flows
- `docs/` is the system of record and must be updated when behavior changes

Naming:
- Use lowercase snake_case for Python modules and JSON fixtures
- Use kebab-case for route paths and snake_case for Markdown file names
- Use PascalCase for React components
- Name tests after the user behavior they verify

Code quality:
- Run lint and tests before opening a PR
- Prefer small modules and explicit types over helper sprawl
- Keep schema definitions close to the boundary they validate

Git and PRs:
- Branches should be short-lived and scoped to one PR
- Commit messages should be imperative and specific
- PRs must follow `.github/pull_request_template.md`
- PR descriptions must start with intent, then acceptance coverage, then test plan
