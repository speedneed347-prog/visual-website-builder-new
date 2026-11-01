import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { createDocument, createDocumentNode } from "../../src/document/documentFactory";
import DocumentRenderer from "../../src/renderer/DocumentRenderer";

describe("Document Renderer", () => {
  it("renders document elements", () => {
    const document = createDocument("Test Website");

    document.root.children.push(
      createDocumentNode("heading", {
        text: "Welcome to my website"
      })
    );

    render(<DocumentRenderer document={document} />);

    expect(screen.getByText("Welcome to my website")).toBeTruthy();
  });

  it("renders nested elements", () => {
    const document = createDocument();

    document.root.children.push(
      createDocumentNode("container", {}, [
        createDocumentNode("text", { text: "Nested content" })
      ])
    );

    render(<DocumentRenderer document={document} />);

    expect(screen.getByText("Nested content")).toBeTruthy();
  });
});
