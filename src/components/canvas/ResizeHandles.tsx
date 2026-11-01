
import React from "react";

export type ResizeDirection =
  | "top-left"
  | "top"
  | "top-right"
  | "right"
  | "bottom-right"
  | "bottom"
  | "bottom-left"
  | "left";

interface ResizeHandlesProps {
  onResizeStart?: (direction: ResizeDirection, event: React.PointerEvent<HTMLButtonElement>) => void;
}

const directions: ResizeDirection[] = [
  "top-left",
  "top",
  "top-right",
  "right",
  "bottom-right",
  "bottom",
  "bottom-left",
  "left",
];

export default function ResizeHandles({
  onResizeStart,
}: ResizeHandlesProps) {
  return (
    <>
      {directions.map((direction) => {
        const [vertical, horizontal] = direction.split("-").length === 2
          ? direction.split("-")
          : direction === "top" || direction === "bottom"
            ? [direction, "center"]
            : ["center", direction];

        return (
          <button
            key={direction}
            type="button"
            aria-label={`Resize ${direction}`}
            onPointerDown={(event) => onResizeStart?.(direction, event)}
            style={{
              position: "absolute",
              width: 9,
              height: 9,
              padding: 0,
              border: "1px solid #635bff",
              borderRadius: 2,
              background: "#fff",
              left:
                horizontal === "left" ? -5 :
                horizontal === "right" ? "calc(100% - 4px)" : "50%",
              top:
                vertical === "top" ? -5 :
                vertical === "bottom" ? "calc(100% - 4px)" : "50%",
              transform: "translate(-50%, -50%)",
              cursor: `${direction}-resize`,
              pointerEvents: "auto",
            }}
          />
        );
      })}
    </>
  );
}
