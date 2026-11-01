import type { DocumentNode } from "../../document/documentFactory";

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

function escapeJsx(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/{/g, "&#123;")
    .replace(/}/g, "&#125;");
}

export function generateJsx(node: DocumentNode): string {
  const tag = tagMap[node.type] ?? "div";
  const props = node.props ?? {};
  const children = node.children.map(generateJsx).join("\n");

  const styleEntries = Object.entries(node.styles ?? {})
    .map(([key, value]) => `${JSON.stringify(key)}:${JSON.stringify(value)}`)
    .join(",");

  const style = styleEntries ? ` style={{${styleEntries}}}` : "";
  const id = ` data-element-id=${JSON.stringify(node.id)}`;

  if (node.type === "image") {
    return `<img${id} src=${JSON.stringify(props.src ?? "")} alt=${JSON.stringify(props.alt ?? "")}${style} />`;
  }

  if (node.type === "divider" || node.type === "spacer") {
    return `<${tag}${id}${style} />`;
  }

  const text = typeof props.text === "string" ? escapeJsx(props.text) : "";

  if (node.type === "link") {
    return `<a${id} href=${JSON.stringify(props.href ?? "#")}${style}>${text || children}</a>`;
  }

  if (node.type === "button") {
    return `<button${id} type="button"${style}>${text || children}</button>`;
  }

  return `<${tag}${id}${style}>${text}${children}</${tag}>`;
}
