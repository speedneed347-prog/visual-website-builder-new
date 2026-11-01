import { describe, expect, it } from "vitest";
import { createDocument, createDocumentNode } from "../../src/document/documentFactory";
import { validateDocument } from "../../src/document/documentValidator";
import { serializeDocument, deserializeDocument } from "../../src/document/documentSerializer";

describe("Document", () => {
  it("creates a document with a root node", () => {
    const document = createDocument();
    expect(document.root.type).toBe("section");
    expect(document.id).toBeTruthy();
  });

  it("validates a newly created document", () => {
    expect(validateDocument(createDocument()).valid).toBe(true);
  });

  it("serializes and deserializes a document", () => {
    const document = createDocument("Test");
    const result = deserializeDocument(serializeDocument(document));
    expect(result.name).toBe("Test");
  });

  it("creates unique node IDs", () => {
    const first = createDocumentNode("text");
    const second = createDocumentNode("text");
    expect(first.id).not.toBe(second.id);
  });
});
