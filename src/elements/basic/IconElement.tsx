import type { CSSProperties } from "react";

type Props = {
  name?: string;
  size?: number;
  color?: string;
  style?: CSSProperties;
};

const symbols: Record<string, string> = {
  star: "★", heart: "♥", check: "✓", arrow: "→",
  plus: "+", menu: "☰", search: "⌕", close: "×"
};

export default function IconElement({
  name = "star", size = 24, color = "currentColor", style
}: Props) {
  return (
    <span role="img" aria-label={name}
      style={{ display: "inline-block", fontSize: size, color, lineHeight: 1, ...style }}>
      {symbols[name] ?? "◇"}
    </span>
  );
}
