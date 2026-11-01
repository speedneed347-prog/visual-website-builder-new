import type { BuilderDocument, DocumentNode } from "../../document/documentFactory";
import { serializeHtmlNode } from "./htmlSerializer";
import { createHtmlTemplate } from "./htmlTemplates";

export function compileHtml(document: BuilderDocument): string {
  const body = serializeHtmlNode(document.root);

  return createHtmlTemplate({
    title: String(document.metadata.title ?? document.name),
    description: String(document.metadata.description ?? ""),
    body
  });
}

export function compileHtmlNode(node: DocumentNode): string {
  return serializeHtmlNode(node);
}
