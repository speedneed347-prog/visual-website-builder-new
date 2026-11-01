import { describe, expect, it } from "vitest";
import { createDocument, createDocumentNode } from "../../src/document/documentFactory";
import { compileDocument } from "../../src/compiler/compiler";

describe("Compiler", () => {
  it("generates HTML project files", () => {
    const document = createDocument("Test Site");
    document.root.children.push(
      createDocumentNode("heading", { text: "Hello World" })
    );

    const result = compileDocument(document, "html");

    expect(result.errors).toHaveLength(0);
    expect(result.files["index.html"]).toContain("Hello World");
    expect(result.files["styles.css"]).toBeDefined();
    expect(result.files["script.js"]).toBeDefined();
  });

  it("generates React project files", () => {
    const document = createDocument("React Site");
    const result = compileDocument(document, "react");

    expect(result.errors).toHaveLength(0);
    expect(result.files["src/App.tsx"]).toBeDefined();
    expect(result.files["package.json"]).toBeDefined();
  });
});
