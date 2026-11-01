import type { CSSProperties, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  columns?: number;
  gap?: number;
  minColumnWidth?: number;
  style?: CSSProperties;
};

export default function GridElement({
  children, columns = 2, gap = 16, minColumnWidth, style
}: Props) {
  const template = minColumnWidth
    ? `repeat(auto-fit, minmax(${minColumnWidth}px, 1fr))`
    : `repeat(${Math.max(1, columns)}, minmax(0, 1fr))`;

  return (
    <div style={{
      display: "grid", gridTemplateColumns: template, gap, ...style
    }}>
      {children}
    </div>
  );
}
