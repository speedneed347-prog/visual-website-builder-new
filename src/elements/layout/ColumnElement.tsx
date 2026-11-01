import type { CSSProperties, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  gap?: number;
  align?: CSSProperties["alignItems"];
  style?: CSSProperties;
};

export default function ColumnElement({
  children, gap = 12, align = "stretch", style
}: Props) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", gap,
      alignItems: align, ...style
    }}>
      {children}
    </div>
  );
}
