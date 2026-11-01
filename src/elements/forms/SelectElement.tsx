import type { SelectHTMLAttributes } from "react";

type Option = { label: string; value: string };

type Props = Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> & {
  label?: string;
  options?: Option[];
};

export default function SelectElement({ label, options = [], id, style, ...props }: Props) {
  const selectId = id ?? props.name;

  return (
    <label htmlFor={selectId} style={{ display: "grid", gap: 6 }}>
      {label && <span>{label}</span>}
      <select {...props} id={selectId}
        style={{
          width: "100%", padding: "10px 12px",
          border: "1px solid #cbd5e1", borderRadius: 6,
          background: "#fff", font: "inherit", ...style
        }}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}
