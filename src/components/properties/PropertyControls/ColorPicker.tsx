
import React from "react";

interface ColorPickerProps {
  label?: string;
  value?: string;
  onChange?: (color: string) => void;
}

export default function ColorPicker({
  label = "Color",
  value = "#635bff",
  onChange,
}: ColorPickerProps) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span>{label}</span>
      <input
        type="color"
        value={/^#[0-9a-fA-F]{6}$/.test(value) ? value : "#635bff"}
        onChange={(event) => onChange?.(event.target.value)}
      />
      <input
        type="text"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        aria-label={`${label} hex value`}
      />
    </label>
  );
}
