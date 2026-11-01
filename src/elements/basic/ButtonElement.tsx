import type { CSSProperties, MouseEventHandler } from "react";

type Props = {
  text?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function ButtonElement({
  text = "Click me", href, variant = "primary", style, onClick
}: Props) {
  const variants = {
    primary: { background: "#635bff", color: "#fff", border: "1px solid #635bff" },
    secondary: { background: "#e5e7eb", color: "#111827", border: "1px solid #e5e7eb" },
    outline: { background: "transparent", color: "#635bff", border: "1px solid #635bff" }
  };

  const buttonStyle: CSSProperties = {
    padding: "10px 18px", borderRadius: 8, cursor: "pointer",
    font: "inherit", ...variants[variant], ...style
  };

  if (href) {
    return <a href={href} style={{ ...buttonStyle, display: "inline-block", textDecoration: "none" }}>{text}</a>;
  }

  return <button type="button" onClick={onClick} style={buttonStyle}>{text}</button>;
}
