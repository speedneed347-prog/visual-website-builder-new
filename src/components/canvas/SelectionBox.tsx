
import React from "react";

interface SelectionBoxProps {
  x: number;
  y: number;
  width: number;
  height: number;
  visible?: boolean;
}

export default function SelectionBox({
  x,
  y,
  width,
  height,
  visible = true,
}: SelectionBoxProps) {
  if (!visible) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        border: "1px solid #635bff",
        background: "#635bff12",
        pointerEvents: "none",
        boxSizing: "border-box",
      }}
    />
  );
}
