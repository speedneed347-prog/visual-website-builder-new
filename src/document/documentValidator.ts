import type { BuilderDocument, DocumentNode } from "./documentFactory";

export type ValidationIssue = {
  path: string;
  message: string;
};

function validateNode(
  node: unknown,
  path: string,
  issues: ValidationIssue[],
  visited: Set<string>
): node is DocumentNode {
  if (!node || typeof node !== "object") {
    issues.push({ path, message: "Node must be an object" });
    return false;
  }

  const value = node as Record<string, unknown>;

  if (typeof value.id !== "string" || !value.id) {
    issues.push({ path: `${path}.id`, message: "Missing node ID" });
  } else if (visited.has(value.id)) {
    issues.push({ path: `${path}.id`, message: "Duplicate node ID" });
  } else {
    visited.add(value.id);
  }

  if (typeof value.type !== "string" || !value.type) {
    issues.push({ path: `${path}.type`, message: "Invalid node type" });
  }

  if (!value.props || typeof value.props !== "object" || Array.isArray(value.props)) {
    issues.push({ path: `${path}.props`, message: "Props must be an object" });
  }

  if (!value.styles || typeof value.styles !== "object" || Array.isArray(value.styles)) {
    issues.push({ path: `${path}.styles`, message: "Styles must be an object" });
  }

  if (!Array.isArray(value.children)) {
    issues.push({ path: `${path}.children`, message: "Children must be an array" });
  } else {
    value.children.forEach((child, index) => {
      validateNode(child, `${path}.children[${index}]`, issues, visited);
    });
  }

  return true;
}

export function validateDocument(document: unknown) {
  const issues: ValidationIssue[] = [];

  if (!document || typeof document !== "object") {
    return { valid: false, issues: [{ path: "$", message: "Document must be an object" }] };
  }

  const value = document as Partial<BuilderDocument>;

  if (typeof value.id !== "string") {
    issues.push({ path: "id", message: "Document ID is required" });
  }

  if (typeof value.version !== "number") {
    issues.push({ path: "version", message: "Document version is required" });
  }

  if (!value.root) {
    issues.push({ path: "root", message: "Document root is required" });
  } else {
    validateNode(value.root, "root", issues, new Set());
  }

  return { valid: issues.length === 0, issues };
}
