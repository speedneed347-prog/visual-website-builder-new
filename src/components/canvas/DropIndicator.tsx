
import React from "react";

interface DropIndicatorProps {
  x: number;
  y: number;
  width: number;
  height?: number;
  visible?: boolean;
}

export default function DropIndicator({
  x,
  y,
  width,
  height = 3,
  visible = true,
}: DropIndicatorProps) {
  if (!visible) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        background: "#635bff",
        borderRadius: 4,
        pointerEvents: "none",
        zIndex: 2000,
      }}
    />
  );
}
