
import React from "react";

export interface CanvasElementProps {
  id: string;
  selected?: boolean;
  children?: React.ReactNode;
  onSelect?: (id: string) => void;
  style?: React.CSSProperties;
}

export default function CanvasElement({
  id,
  selected = false,
  children,
  onSelect,
  style,
}: CanvasElementProps) {
  return (
    <div
      data-element-id={id}
      onClick={(event) => {
        event.stopPropagation();
        onSelect?.(id);
      }}
      style={{
        position: "relative",
        outline: selected ? "2px solid #635bff" : "none",
        outlineOffset: 1,
        cursor: "pointer",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
