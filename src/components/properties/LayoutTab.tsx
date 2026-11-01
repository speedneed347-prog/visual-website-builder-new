
import React from "react";

interface LayoutTabProps {
  values?: Record<string, string>;
  onChange?: (key: string, value: string) => void;
}

export default function LayoutTab({
  values = {},
  onChange,
}: LayoutTabProps) {
  const fields = [
    { key: "display", label: "Display", options: ["block", "flex", "grid", "inline-flex", "none"] },
    { key: "position", label: "Position", options: ["static", "relative", "absolute", "fixed", "sticky"] },
    { key: "direction", label: "Flex Direction", options: ["row", "column", "row-reverse", "column-reverse"] },
    { key: "justifyContent", label: "Justify Content", options: ["flex-start", "center", "flex-end", "space-between", "space-around"] },
    { key: "alignItems", label: "Align Items", options: ["stretch", "flex-start", "center", "flex-end"] },
  ];

  return (
    <section>
      <h4>Layout</h4>

      {fields.map((field) => (
        <label key={field.key} style={{ display: "block", marginBottom: 14 }}>
          <span>{field.label}</span>
          <select
            value={values[field.key] ?? field.options[0]}
            onChange={(event) => onChange?.(field.key, event.target.value)}
            style={{ display: "block", width: "100%", padding: 8 }}
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
