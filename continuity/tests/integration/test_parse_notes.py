from pathlib import Path
import sys

from fastapi.testclient import TestClient

ROOT = Path(__file__).resolve().parents[2]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from backend.app.main import app

client = TestClient(app)


def test_parse_notes_returns_empty_inbox_for_hello_flow() -> None:
    response = client.post(
        "/api/notes/parse",
        json={"notesText": "Ran said she's overwhelmed at work."},
    )

    assert response.status_code == 200
    body = response.json()
    assert body["uploaded"] is True
    assert body["parsed"] is True
    assert body["aliasConfirmationRequired"] is False
    assert body["inbox"] == []


def test_parse_notes_prompts_for_input_when_empty() -> None:
    response = client.post("/api/notes/parse", json={"notesText": ""})

    assert response.status_code == 200
    body = response.json()
    assert body["uploaded"] is False
    assert body["parsed"] is False
    assert body["inbox"] == []
