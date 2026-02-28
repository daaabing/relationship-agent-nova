# Architecture Overview

Continuity transforms time-stream notes into stateful open loops.

Pipeline:

1. Ingestion Layer
   - Accept Apple Notes export (text/json)
   - Chunk semantically
   - Store with timestamp

2. Embedding Layer
   - Nova multimodal embeddings
   - Store vectors in pgvector or OpenSearch

3. Entity & Intent Extraction
   - Nova 2 Lite structured JSON reasoning
   - Output:
     - people
     - topics
     - emotion
     - open_loops

4. State Engine
   - Track:
     - unresolved loops
     - relationship recency
     - emotional polarity

5. Priority Engine
   Score = Impact x Urgency x Recency x LoopCost

6. Action Generator
   - Nova 2 Lite generates:
     - suggested action
     - optional message draft

7. Meeting Prep Mode
   Input: person name
   Output:
     - last interaction
     - unresolved threads
     - suggested openers
