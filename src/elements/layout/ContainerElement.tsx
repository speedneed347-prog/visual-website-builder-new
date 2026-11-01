import type { CSSProperties, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  maxWidth?: number;
  padding?: number;
  style?: CSSProperties;
};

export default function ContainerElement({
  children, maxWidth = 1200, padding = 16, style
}: Props) {
  return (
    <div style={{
      width: "100%", maxWidth, marginInline: "auto",
      padding, boxSizing: "border-box", ...style
    }}>
      {children}
    </div>
  );
}
