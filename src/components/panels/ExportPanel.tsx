
import React from "react";

type ExportFormat = "html" | "react";

interface ExportPanelProps {
  onExport?: (format: ExportFormat) => void;
  exporting?: boolean;
}

export default function ExportPanel({
  onExport,
  exporting = false,
}: ExportPanelProps) {
  const [format, setFormat] = React.useState<ExportFormat>("html");

  return (
    <section className="export-panel">
      <h3>Export Website</h3>
      <p>Select your preferred output format.</p>

      <label>
        <input
          type="radio"
          checked={format === "html"}
          onChange={() => setFormat("html")}
        />
        Standalone HTML / CSS / JavaScript
      </label>

      <label>
        <input
          type="radio"
          checked={format === "react"}
          onChange={() => setFormat("react")}
        />
        React / TypeScript Project
      </label>

      <button
        type="button"
        disabled={exporting}
        onClick={() => onExport?.(format)}
      >
        {exporting ? "Exporting..." : `Export ${format.toUpperCase()}`}
      </button>
    </section>
  );
}
