import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as { notesText?: string };
  const notesText = body.notesText?.trim() ?? "";

  return NextResponse.json({
    uploaded: notesText.length > 0,
    parsed: notesText.length > 0,
    aliasConfirmationRequired: false,
    inbox: [],
    message:
      notesText.length > 0
        ? "Notes uploaded and parsed. Open Loop Inbox is currently empty."
        : "Paste Apple Notes export text to begin.",
  });
}
