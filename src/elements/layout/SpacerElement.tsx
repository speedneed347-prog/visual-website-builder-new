import type { CSSProperties } from "react";

type Props = {
  height?: number;
  width?: number;
  style?: CSSProperties;
};

export default function SpacerElement({ height = 32, width, style }: Props) {
  return (
    <div aria-hidden="true" style={{
      flex: "0 0 auto", height, width: width ?? "100%", ...style
    }} />
  );
}
