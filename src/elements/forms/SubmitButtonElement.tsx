import type { ButtonHTMLAttributes, CSSProperties } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  style?: CSSProperties;
};

export default function SubmitButtonElement({
  text = "Submit", style, ...props
}: Props) {
  return (
    <button {...props} type="submit"
      style={{
        padding: "10px 18px", border: 0, borderRadius: 7,
        background: "#635bff", color: "#fff", font: "inherit",
        cursor: "pointer", ...style
      }}>
      {text}
    </button>
  );
}
