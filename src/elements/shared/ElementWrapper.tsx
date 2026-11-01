import type { CSSProperties, ReactNode } from "react";

type Props = {
  id?: string;
  selected?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
};

export default function ElementWrapper({
  id,
  selected = false,
  children,
  style,
  onClick
}: Props) {
  return (
    <div
      data-element-id={id}
      onClick={onClick}
      style={{
        position: "relative",
        outline: selected ? "2px solid #635bff" : "none",
        outlineOffset: 1,
        minWidth: 0,
        ...style
      }}
    >
      {children}
    </div>
  );
}
