import type { CSSProperties, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: number;
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  wrap?: boolean;
  style?: CSSProperties;
};

export default function FlexElement({
  children, direction = "row", gap = 16,
  alignItems = "center", justifyContent = "flex-start", wrap = true, style
}: Props) {
  return (
    <div style={{
      display: "flex", flexDirection: direction, gap,
      alignItems, justifyContent, flexWrap: wrap ? "wrap" : "nowrap",
      ...style
    }}>
      {children}
    </div>
  );
}
