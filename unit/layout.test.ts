import { describe, expect, it } from "vitest";
import { calculateLayout } from "../../src/engine/layout/layoutEngine";

describe("Layout engine", () => {
  const items = [
    { id: "a", x: 10, y: 20, width: 100, height: 50 },
    { id: "b", x: 120, y: 20, width: 100, height: 50 },
    { id: "c", x: 10, y: 80, width: 100, height: 50 }
  ];

  it("calculates absolute positions", () => {
    const result = calculateLayout(items, { mode: "absolute" });
    expect(result[0]).toMatchObject({ id: "a", x: 10, y: 20 });
  });

  it("calculates grid positions", () => {
    const result = calculateLayout(items, { mode: "grid", columns: 2 });
    expect(result[2]).toMatchObject({ id: "c", row: 1, column: 0 });
  });

  it("calculates flex order", () => {
    const result = calculateLayout(items, { mode: "flex", gap: 10 });
    expect(result[1]).toMatchObject({ id: "b", order: 1, gapBefore: 10 });
  });
});
