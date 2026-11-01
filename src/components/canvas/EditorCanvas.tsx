
import React from "react";
import CanvasViewport from "./CanvasViewport";
import CanvasOverlay from "./CanvasOverlay";

interface EditorCanvasProps {
  children?: React.ReactNode;
  width?: number;
  height?: number;
  zoom?: number;
}

export default function EditorCanvas({
  children,
  width = 1200,
  height = 800,
  zoom = 100,
}: EditorCanvasProps) {
  return (
    <div className="editor-canvas">
      <CanvasViewport zoom={zoom}>
        <div
          className="canvas-document"
          style={{
            width,
            minHeight: height,
            position: "relative",
            background: "#ffffff",
            overflow: "hidden",
          }}
        >
          {children}
          <CanvasOverlay />
        </div>
      </CanvasViewport>
    </div>
  );
}
