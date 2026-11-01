
import React from "react";

interface SpacingTabProps {
  values?: Record<string, string>;
  onChange?: (key: string, value: string) => void;
}

export default function SpacingTab({
  values = {},
  onChange,
}: SpacingTabProps) {
  const fields = [
    "marginTop", "marginRight", "marginBottom", "marginLeft",
    "paddingTop", "paddingRight", "paddingBottom", "paddingLeft",
  ];

  return (
    <section>
      <h4>Spacing</h4>

      {fields.map((field) => (
        <label
          key={field}
          style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}
        >
          <span>{field.replace(/([A-Z])/g, " $1")}</span>
          <input
            type="text"
            value={values[field] ?? "0"}
            onChange={(event) => onChange?.(field, event.target.value)}
            style={{ width: 90 }}
          />
        </label>
      ))}
    </section>
  );
}
