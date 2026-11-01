import type { BuilderDocument } from "../document/documentFactory";
import type { ExportFormat } from "./exportManager";

export function createExportManifest(
  document: BuilderDocument,
  format: ExportFormat
) {
  return {
    projectId: document.id,
    projectName: document.name,
    format,
    documentVersion: document.version,
    exportedAt: new Date().toISOString(),
    generatedBy: "Visual Website Builder"
  };
}
