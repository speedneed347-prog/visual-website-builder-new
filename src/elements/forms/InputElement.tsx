import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function InputElement({ label, id, style, ...props }: Props) {
  const inputId = id ?? props.name;

  return (
    <label htmlFor={inputId} style={{ display: "grid", gap: 6 }}>
      {label && <span>{label}</span>}
      <input
        {...props}
        id={inputId}
        style={{
          width: "100%", boxSizing: "border-box", padding: "10px 12px",
          border: "1px solid #cbd5e1", borderRadius: 6, font: "inherit",
          ...style
        }}
      />
    </label>
  );
}
