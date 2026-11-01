
import React from "react";

type Unit = "px" | "%" | "rem" | "vw" | "vh" | "auto";

interface DimensionInputProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  units?: Unit[];
}

export default function DimensionInput({
  label,
  value = "auto",
  onChange,
  units = ["px", "%", "rem", "vw", "vh", "auto"],
}: DimensionInputProps) {
  const match = value.match(/^(-?\d*\.?\d+)(px|%|rem|vw|vh)$/);
  const number = match?.[1] ?? "";
  const unit = (match?.[2] ?? (value === "auto" ? "auto" : "px")) as Unit;

  return (
    <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <span>{label}</span>

      <input
        type="text"
        value={number}
        disabled={unit === "auto"}
        onChange={(event) => onChange?.(`${event.target.value}${unit}`)}
        style={{ width: 80 }}
      />

      <select
        value={unit}
        onChange={(event) => {
          const nextUnit = event.target.value as Unit;
          onChange?.(nextUnit === "auto" ? "auto" : `${number || 0}${nextUnit}`);
        }}
      >
        {units.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </label>
  );
}
