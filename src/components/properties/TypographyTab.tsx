
import React from "react";

interface TypographyTabProps {
  values?: Record<string, string>;
  onChange?: (key: string, value: string) => void;
}

export default function TypographyTab({
  values = {},
  onChange,
}: TypographyTabProps) {
  const fields = [
    { key: "fontFamily", label: "Font Family", options: ["Arial", "Inter", "Roboto", "Georgia", "system-ui"] },
    { key: "fontWeight", label: "Font Weight", options: ["300", "400", "500", "600", "700", "800"] },
    { key: "textAlign", label: "Text Align", options: ["left", "center", "right", "justify"] },
    { key: "fontStyle", label: "Font Style", options: ["normal", "italic"] },
    { key: "textDecoration", label: "Decoration", options: ["none", "underline", "line-through"] },
  ];

  return (
    <section>
      <h4>Typography</h4>

      <label>
        Font Size
        <input
          type="number"
          min="1"
          value={values.fontSize ?? "16"}
          onChange={(event) => onChange?.("fontSize", event.target.value)}
        />
      </label>

      {fields.map((field) => (
        <label key={field.key} style={{ display: "block", marginTop: 12 }}>
          {field.label}
          <select
            value={values[field.key] ?? field.options[0]}
            onChange={(event) => onChange?.(field.key, event.target.value)}
          >
            {field.options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
      ))}
    </section>
  );
}
