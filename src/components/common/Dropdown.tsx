
import React from "react";

export interface DropdownOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function Dropdown({
  options,
  value = "",
  placeholder = "Select an option",
  onChange,
}: DropdownProps) {
  return (
    <select
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
      style={{
        padding: "9px 12px",
        border: "1px solid #ddd",
        borderRadius: 7,
        background: "#fff",
        font: "inherit",
      }}
    >
      <option value="" disabled>{placeholder}</option>

      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}
