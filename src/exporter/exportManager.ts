import type { BuilderDocument } from "../document/documentFactory";
import { compileDocument } from "../compiler/compiler";
import { validateExport } from "./exportValidator";
import { createExportManifest } from "./exportManifest";

export type ExportFormat = "html" | "react";

export function createExport(
  document: BuilderDocument,
  format: ExportFormat
) {
  const validation = validateExport(document);

  if (!validation.valid) {
    throw new Error(validation.errors.join("\n"));
  }

  const compiled = compileDocument(document, format);

  if (compiled.errors.length) {
    throw new Error(compiled.errors.join("\n"));
  }

  return {
    files: compiled.files,
    manifest: createExportManifest(document, format),
    warnings: compiled.warnings
  };
}
