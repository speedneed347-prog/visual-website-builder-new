import type { CSSProperties } from "react";

type Props = {
  text?: string;
  style?: CSSProperties;
  className?: string;
};

export default function TextElement({ text = "Edit this text", style, className }: Props) {
  return <p className={className} style={{ margin: 0, ...style }}>{text}</p>;
}
