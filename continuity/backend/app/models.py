from pydantic import BaseModel, Field


class ParseNotesRequest(BaseModel):
    notes_text: str = Field(default="", alias="notesText")


class OpenLoopItem(BaseModel):
    id: str
    title: str
    category: str
    evidence: str
    suggested_action: str = Field(alias="suggestedAction")
    priority_score: int = Field(alias="priorityScore")
    status: str


class ParseNotesResponse(BaseModel):
    uploaded: bool
    parsed: bool
    alias_confirmation_required: bool = Field(alias="aliasConfirmationRequired")
    inbox: list[OpenLoopItem]
    message: str
