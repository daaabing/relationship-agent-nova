export type LoopCategory =
  | "Promise"
  | "Follow-up"
  | "Decision Pending"
  | "Tension"
  | "Recurring Pattern"
  | "Prep Needed";

export type OpenLoopItem = {
  id: string;
  title: string;
  category: LoopCategory;
  evidence: string;
  suggestedAction: string;
  priorityScore: number;
  status: "active" | "done" | "dismissed";
};

export type ParseNotesRequest = {
  notesText: string;
};

export type ParseNotesResponse = {
  uploaded: boolean;
  parsed: boolean;
  aliasConfirmationRequired: boolean;
  inbox: OpenLoopItem[];
  message: string;
};
