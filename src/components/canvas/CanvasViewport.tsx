
import React from "react";

interface CanvasViewportProps {
  children: React.ReactNode;
  zoom?: number;
}

export default function CanvasViewport({
  children,
  zoom = 100,
}: CanvasViewportProps) {
  return (
    <div
      className="canvas-viewport"
      style={{
        width: "100%",
        height: "100%",
        minHeight: 500,
        overflow: "auto",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 40,
      }}
    >
      <div
        style={{
          transform: `scale(${zoom / 100})`,
          transformOrigin: "top center",
          flexShrink: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}
