import type { BuilderDocument } from "../document/documentFactory";
import { validateDocument } from "../document/documentValidator";

export function validateExport(document: BuilderDocument) {
  const errors: string[] = [];
  const warnings: string[] = [];

  const result = validateDocument(document);

  if (!result.valid) {
    errors.push(...result.issues.map((issue) => `${issue.path}: ${issue.message}`));
  }

  if (!document.name.trim()) {
    errors.push("Project name cannot be empty");
  }

  if (document.root.children.length === 0) {
    warnings.push("Your website currently has no child elements");
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}
