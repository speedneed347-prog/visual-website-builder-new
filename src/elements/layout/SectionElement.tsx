import type { CSSProperties, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  minHeight?: number;
  padding?: number;
  background?: string;
  style?: CSSProperties;
};

export default function SectionElement({
  children, minHeight = 120, padding = 24, background, style
}: Props) {
  return (
    <section style={{
      width: "100%", minHeight, padding, boxSizing: "border-box",
      background, ...style
    }}>
      {children}
    </section>
  );
}
