import type { CSSProperties, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  gap?: number;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  wrap?: boolean;
  style?: CSSProperties;
};

export default function RowElement({
  children, gap = 12, align = "center",
  justify = "flex-start", wrap = true, style
}: Props) {
  return (
    <div style={{
      display: "flex", flexDirection: "row", gap,
      alignItems: align, justifyContent: justify,
      flexWrap: wrap ? "wrap" : "nowrap", ...style
    }}>
      {children}
    </div>
  );
}
