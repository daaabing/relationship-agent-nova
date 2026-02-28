# Golden Tests

Maintain 5-10 representative note fixtures for the core pipeline.

Current fixture set:
- `sample_notes_1.json`: follow-up detection
- `sample_notes_2.json`: promise detection
- `sample_notes_3.json`: decision pending detection
- `sample_notes_4.json`: tension detection
- `sample_notes_5.json`: meeting prep detection

Each fixture has a matching expected output JSON in `docs/evals/fixtures/expected/`.

Given sample_notes_1.json:

Expected:
- Extracted people: ["Ran"]
- One loop:
  - Type: Follow-up
  - Target: Ran
  - Evidence contains: "check in after she said she's overwhelmed"

These fixtures must pass before merging PRs affecting:
- Intent detection
- Embedding retrieval
- Priority engine

Each fixture should define expected structured outputs for:
- people
- topics
- open_loops
