import type { CSSProperties } from "react";

type Props = {
  thickness?: number;
  color?: string;
  style?: CSSProperties;
};

export default function DividerElement({
  thickness = 1, color = "#e5e7eb", style
}: Props) {
  return (
    <hr style={{
      border: 0, borderTop: `${thickness}px solid ${color}`,
      width: "100%", margin: 0, ...style
    }} />
  );
}
