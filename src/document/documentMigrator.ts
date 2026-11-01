import type { BuilderDocument } from "./documentFactory";

export const CURRENT_DOCUMENT_VERSION = 1;

export function migrateDocument(input: unknown): BuilderDocument {
  if (!input || typeof input !== "object") {
    throw new Error("Cannot migrate an invalid document");
  }

  const document = structuredClone(input) as Record<string, unknown>;
  const version = Number(document.version ?? 0);

  if (version > CURRENT_DOCUMENT_VERSION) {
    throw new Error("Document was created by a newer builder version");
  }

  if (version < 1) {
    document.version = 1;
    document.metadata ??= {};
  }

  return document as unknown as BuilderDocument;
}
