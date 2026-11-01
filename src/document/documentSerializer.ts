import type { BuilderDocument } from "./documentFactory";
import { validateDocument } from "./documentValidator";

export function serializeDocument(document: BuilderDocument): string {
  const result = validateDocument(document);

  if (!result.valid) {
    throw new Error(
      `Cannot serialize invalid document: ${result.issues.map((item) => item.message).join(", ")}`
    );
  }

  return JSON.stringify(document, null, 2);
}

export function deserializeDocument(source: string): BuilderDocument {
  let parsed: unknown;

  try {
    parsed = JSON.parse(source);
  } catch {
    throw new Error("Invalid JSON document");
  }

  const result = validateDocument(parsed);

  if (!result.valid) {
    throw new Error(
      `Invalid document: ${result.issues.map((item) => item.message).join(", ")}`
    );
  }

  return parsed as BuilderDocument;
}
