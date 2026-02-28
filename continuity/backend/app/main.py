from fastapi import FastAPI

from .models import ParseNotesRequest, ParseNotesResponse

app = FastAPI(title="Continuity API")


@app.get("/health")
def healthcheck() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/notes/parse", response_model=ParseNotesResponse)
def parse_notes(request: ParseNotesRequest) -> ParseNotesResponse:
    notes_present = bool(request.notes_text.strip())
    message = (
        "Notes uploaded and parsed. Open Loop Inbox is currently empty."
        if notes_present
        else "Paste Apple Notes export text to begin."
    )

    return ParseNotesResponse(
        uploaded=notes_present,
        parsed=notes_present,
        aliasConfirmationRequired=False,
        inbox=[],
        message=message,
    )
