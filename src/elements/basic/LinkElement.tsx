import type { CSSProperties } from "react";

type Props = {
  text?: string;
  href?: string;
  target?: "_self" | "_blank";
  style?: CSSProperties;
};

export default function LinkElement({
  text = "Learn more", href = "#", target = "_self", style
}: Props) {
  return (
    <a href={href} target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      style={{ color: "#635bff", textDecoration: "underline", ...style }}>
      {text}
    </a>
  );
}
