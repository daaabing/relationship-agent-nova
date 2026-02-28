# Security

Data handling:
- Treat all notes as sensitive personal data
- Do not log raw note bodies in production logs
- Store only the minimum text needed for traceable evidence snippets

Secrets:
- Keep API keys and database credentials in environment variables
- Never hardcode secrets in source, tests, or fixtures

LLM and retrieval safeguards:
- Validate every model response against schema before use
- Reject malformed outputs instead of silently coercing them
- Keep evidence references tied to stored source note IDs

Access and audit:
- Restrict write paths for state changes to authenticated application flows
- Log state mutations with actor, timestamp, and target loop ID
