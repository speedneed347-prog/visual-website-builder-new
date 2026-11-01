import type { CSSProperties, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  gap?: number;
  direction?: "vertical" | "horizontal";
  style?: CSSProperties;
};

export default function StackElement({
  children, gap = 12, direction = "vertical", style
}: Props) {
  return (
    <div style={{
      display: "flex",
      flexDirection: direction === "vertical" ? "column" : "row",
      gap, ...style
    }}>
      {children}
    </div>
  );
}
