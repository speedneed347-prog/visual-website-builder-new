import { describe, expect, it } from "vitest";
import { createDocument, createDocumentNode } from "../../src/document/documentFactory";
import { createExport } from "../../src/exporter/exportManager";
import { createProjectFiles, validateProjectFiles } from "../../src/exporter/projectPackager";

describe("Project Export", () => {
  it("creates a standalone HTML export", () => {
    const document = createDocument("Export Test");

    document.root.children.push(
      createDocumentNode("heading", { text: "Exported website" })
    );

    const result = createExport(document, "html");

    expect(result.files["index.html"]).toContain("Exported website");
    expect(result.manifest.format).toBe("html");
  });

  it("creates React export files", () => {
    const result = createExport(createDocument("React Export"), "react");

    expect(result.files["src/App.tsx"]).toBeDefined();
    expect(result.files["package.json"]).toBeDefined();
  });

  it("validates project file paths", () => {
    const files = createProjectFiles({
      "index.html": "<html></html>",
      "styles.css": "body{}"
    });

    expect(validateProjectFiles(files).valid).toBe(true);
  });
});
