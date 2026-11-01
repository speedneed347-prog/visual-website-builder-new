
import React from "react";

interface RulerProps {
  orientation: "horizontal" | "vertical";
  length: number;
  step?: number;
}

export default function Ruler({
  orientation,
  length,
  step = 50,
}: RulerProps) {
  const vertical = orientation === "vertical";
  const marks = Array.from(
    { length: Math.floor(length / step) + 1 },
    (_, index) => index * step
  );

  return (
    <div
      className={`canvas-ruler ${orientation}`}
      style={{
        position: "relative",
        width: vertical ? 28 : length,
        height: vertical ? length : 28,
        background: "#f7f7fb",
        border: "1px solid #e5e5ee",
        flexShrink: 0,
      }}
    >
      {marks.map((position) => (
        <div
          key={position}
          style={{
            position: "absolute",
            left: vertical ? 0 : position,
            top: vertical ? position : 0,
            fontSize: 9,
            color: "#777",
          }}
        >
          {position}
        </div>
      ))}
    </div>
  );
}
