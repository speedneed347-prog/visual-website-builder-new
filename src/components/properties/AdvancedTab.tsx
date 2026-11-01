
import React from "react";

interface AdvancedTabProps {
  values?: Record<string, string>;
  onChange?: (key: string, value: string) => void;
}

export default function AdvancedTab({
  values = {},
  onChange,
}: AdvancedTabProps) {
  const fields = [
    { key: "id", label: "Element ID" },
    { key: "className", label: "CSS Class" },
    { key: "zIndex", label: "Z Index" },
    { key: "overflow", label: "Overflow" },
    { key: "cursor", label: "Cursor" },
  ];

  return (
    <section>
      <h4>Advanced Properties</h4>

      {fields.map((field) => (
        <label key={field.key} style={{ display: "block", marginBottom: 14 }}>
          {field.label}
          <input
            type="text"
            value={values[field.key] ?? ""}
            onChange={(event) => onChange?.(field.key, event.target.value)}
          />
        </label>
      ))}
    </section>
  );
}
