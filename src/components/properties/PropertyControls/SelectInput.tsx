
import React from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectInputProps {
  label: string;
  value?: string;
  options: SelectOption[];
  onChange?: (value: string) => void;
}

export default function SelectInput({
  label,
  value,
  options,
  onChange,
}: SelectInputProps) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label}
      <select
        value={value ?? options[0]?.value ?? ""}
        onChange={(event) => onChange?.(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
