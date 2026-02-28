"use client";

import { useState } from "react";

type ParseNotesResponse = {
  uploaded: boolean;
  parsed: boolean;
  aliasConfirmationRequired: boolean;
  inbox: Array<unknown>;
  message: string;
};

export function HelloFlow() {
  const [notesText, setNotesText] = useState("");
  const [result, setResult] = useState<ParseNotesResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit() {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notesText }),
      });

      const body = (await response.json()) as ParseNotesResponse;
      setResult(body);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "48px 20px 80px",
      }}
    >
      <section
        style={{
          display: "grid",
          gap: 24,
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          alignItems: "start",
        }}
      >
        <div
          style={{
            background: "var(--panel)",
            border: "1px solid var(--border)",
            borderRadius: 24,
            padding: 24,
            boxShadow: "0 20px 50px rgba(29, 29, 27, 0.06)",
          }}
        >
          <p style={{ margin: 0, color: "var(--accent)", letterSpacing: "0.08em" }}>
            HELLO FLOW
          </p>
          <h1 style={{ margin: "8px 0 12px", fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
            Time stream to a clean inbox.
          </h1>
          <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>
            This scaffold covers the first v1 slice: paste Apple Notes text, parse it,
            and render an empty Open Loop Inbox until extraction is implemented.
          </p>
        </div>

        <div
          style={{
            background: "var(--panel)",
            border: "1px solid var(--border)",
            borderRadius: 24,
            padding: 24,
          }}
        >
          <label htmlFor="notes" style={{ display: "block", marginBottom: 12, fontWeight: 700 }}>
            Paste Apple Notes export
          </label>
          <textarea
            id="notes"
            value={notesText}
            onChange={(event) => setNotesText(event.target.value)}
            rows={10}
            placeholder="Paste recent note text here"
            style={{
              width: "100%",
              borderRadius: 16,
              border: "1px solid var(--border)",
              padding: 16,
              background: "#fff",
              resize: "vertical",
            }}
          />
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            style={{
              marginTop: 16,
              border: 0,
              borderRadius: 999,
              background: "var(--accent)",
              color: "#fff",
              padding: "12px 18px",
              cursor: "pointer",
            }}
          >
            {isSubmitting ? "Parsing..." : "Upload and parse"}
          </button>
        </div>
      </section>

      <section
        style={{
          marginTop: 28,
          background: "var(--panel)",
          border: "1px solid var(--border)",
          borderRadius: 24,
          padding: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            alignItems: "baseline",
            flexWrap: "wrap",
          }}
        >
          <h2 style={{ margin: 0 }}>Open Loop Inbox</h2>
          <span style={{ color: "var(--muted)" }}>0 items until extraction ships</span>
        </div>
        <div
          style={{
            marginTop: 16,
            borderRadius: 18,
            border: "1px dashed var(--border)",
            padding: 20,
            color: "var(--muted)",
            lineHeight: 1.6,
          }}
        >
          {result?.message ?? "No notes parsed yet. The inbox will remain empty in this scaffold."}
        </div>
      </section>
    </main>
  );
}
