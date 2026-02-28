# Quality Bar

1. No unstructured LLM outputs in production path.
2. All LLM responses must use JSON schema validation.
3. All loops must include evidence reference.
4. State updates must be replayable from an event log.
5. No silent failures.
6. All priority scoring logic must be deterministic.
7. All core flows must have integration tests.
8. Pipeline changes that affect extraction, retrieval, or ranking must pass golden fixtures.
