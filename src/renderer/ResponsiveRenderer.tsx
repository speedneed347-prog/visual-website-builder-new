import type { CSSProperties, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  desktop?: CSSProperties;
  tablet?: CSSProperties;
  mobile?: CSSProperties;
  mode?: "desktop" | "tablet" | "mobile";
};

export default function ResponsiveRenderer({
  children,
  desktop = {},
  tablet = {},
  mobile = {},
  mode = "desktop"
}: Props) {
  const styles = { desktop, tablet, mobile };
  const activeStyle = styles[mode];

  return (
    <div style={{
      width: "100%",
      boxSizing: "border-box",
      ...activeStyle
    }}>
      {children}
    </div>
  );
}
