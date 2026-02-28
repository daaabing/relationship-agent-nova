# Continuity

A Personal Continuity Engine powered by Amazon Nova.

Continuity transforms Apple Notes from time-stream entries into:

- Prioritized Open Loop Inbox
- Relationship continuity tracking
- Meeting preparation intelligence

Core Nova usage:
- Nova 2 Lite for structured reasoning
- Nova multimodal embeddings for semantic retrieval

Time stream -> state + action.

## Initial Scaffold

This repo now includes a hello flow scaffold:
- `frontend/`: Next.js UI for paste -> parse -> empty inbox
- `backend/`: FastAPI parse endpoint returning an empty inbox
- `shared/`: shared request and response contracts
- `tests/`: integration tests for the parse contract
