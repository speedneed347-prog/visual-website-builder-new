
import React from "react";

interface GridOverlayProps {
  size?: number;
  visible?: boolean;
}

export default function GridOverlay({
  size = 20,
  visible = true,
}: GridOverlayProps) {
  if (!visible || size <= 0) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage:
          "radial-gradient(#a5a5b5 1px, transparent 1px)",
        backgroundSize: `${size}px ${size}px`,
        opacity: 0.35,
      }}
    />
  );
}
