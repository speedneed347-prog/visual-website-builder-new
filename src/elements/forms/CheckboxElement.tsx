import type { InputHTMLAttributes } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
};

export default function CheckboxElement({ label, id, ...props }: Props) {
  const inputId = id ?? props.name;

  return (
    <label htmlFor={inputId}
      style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
      <input {...props} id={inputId} type="checkbox" />
      {label && <span>{label}</span>}
    </label>
  );
}
