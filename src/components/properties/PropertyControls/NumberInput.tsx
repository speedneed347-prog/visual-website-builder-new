
import React from "react";

interface NumberInputProps {
  label: string;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
}

export default function NumberInput({
  label,
  value = 0,
  min,
  max,
  step = 1,
  onChange,
}: NumberInputProps) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      {label}
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(event) => {
          const next = event.target.valueAsNumber;
          if (Number.isFinite(next)) onChange?.(next);
        }}
      />
    </label>
  );
}
