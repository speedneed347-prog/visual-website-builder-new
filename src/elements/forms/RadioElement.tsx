import type { InputHTMLAttributes } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
};

export default function RadioElement({ label, id, ...props }: Props) {
  const inputId = id ?? `${props.name ?? "radio"}-${String(props.value ?? "option")}`;

  return (
    <label htmlFor={inputId}
      style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
      <input {...props} id={inputId} type="radio" />
      {label && <span>{label}</span>}
    </label>
  );
}
