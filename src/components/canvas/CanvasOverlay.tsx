
import React from "react";

interface CanvasOverlayProps {
  children?: React.ReactNode;
}

export default function CanvasOverlay({
  children,
}: CanvasOverlayProps) {
  return (
    <div
      className="canvas-overlay"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1000,
      }}
    >
      {children}
    </div>
  );
}
