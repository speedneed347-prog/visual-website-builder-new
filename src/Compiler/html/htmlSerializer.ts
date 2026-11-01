import type { DocumentNode } from "../../document/documentFactory";
import { styleObjectToCss } from "../../renderer/StyleResolver";

const tagMap: Record<string, string> = {
  text: "p",
  heading: "h2",
  image: "img",
  video: "video",
  button: "button",
  link: "a",
  divider: "hr",
  section: "section",
  container: "div",
  flex: "div",
  grid: "div",
  row: "div",
  column: "div",
  stack: "div",
  spacer: "div"
};

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function serializeHtmlNode(node: DocumentNode): string {
  const tag = tagMap[node.type] ?? "div";
  const props = node.props ?? {};
  const children = node.children.map(serializeHtmlNode).join("");
  const style = styleObjectToCss(node.styles as Record<string, string | number>);

  const styleAttribute = style ? ` style="${escapeHtml(style)}"` : "";

  if (node.type === "image") {
    return `<img src="${escapeHtml(props.src)}" alt="${escapeHtml(props.alt)}"${styleAttribute}>`;
  }

  if (node.type === "video") {
    return `<video src="${escapeHtml(props.src)}" controls${styleAttribute}>${children}</video>`;
  }

  if (node.type === "divider" || node.type === "spacer") {
    return `<${tag}${styleAttribute}>`;
  }

  const content = typeof props.text === "string"
    ? escapeHtml(props.text)
    : "";

  if (node.type === "link") {
    return `<a href="${escapeHtml(props.href ?? "#")}"${styleAttribute}>${content || children}</a>`;
  }

  if (node.type === "button") {
    return `<button type="button"${styleAttribute}>${content || children}</button>`;
  }

  return `<${tag}${styleAttribute}>${content}${children}</${tag}>`;
}
