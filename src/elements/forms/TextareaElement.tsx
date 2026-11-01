import type { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export default function TextareaElement({ label, id, style, ...props }: Props) {
  const textareaId = id ?? props.name;

  return (
    <label htmlFor={textareaId} style={{ display: "grid", gap: 6 }}>
      {label && <span>{label}</span>}
      <textarea
        {...props}
        id={textareaId}
        style={{
          width: "100%", boxSizing: "border-box", padding: 12,
          border: "1px solid #cbd5e1", borderRadius: 6,
          font: "inherit", resize: "vertical", ...style
        }}
      />
    </label>
  );
}
