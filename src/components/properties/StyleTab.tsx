
import React from "react";

interface StyleTabProps {
  values?: Record<string, string>;
  onChange?: (key: string, value: string) => void;
}

export default function StyleTab({
  values = {},
  onChange,
}: StyleTabProps) {
  const fields = [
    { key: "backgroundColor", label: "Background Color", type: "color" },
    { key: "color", label: "Text Color", type: "color" },
    { key: "opacity", label: "Opacity", type: "number" },
    { key: "borderRadius", label: "Border Radius", type: "text" },
  ];

  return (
    <section>
      <h4>Appearance</h4>

      {fields.map((field) => (
        <label key={field.key} style={{ display: "block", marginBottom: 14 }}>
          <span>{field.label}</span>
          <input
            type={field.type}
            value={values[field.key] ?? (field.type === "color" ? "#ffffff" : "")}
            onChange={(event) => onChange?.(field.key, event.target.value)}
            style={{ display: "block", width: "100%", marginTop: 5 }}
          />
        </label>
      ))}
    </section>
  );
}
