import { describe, expect, it } from "vitest";
import { resolveDropTarget } from "../../src/engine/drag-drop/dropResolver";
import { detectCollision } from "../../src/engine/drag-drop/collisionDetector";

describe("Drag and Drop", () => {
  it("accepts a valid container target", () => {
    const result = resolveDropTarget(
      [{ id: "container-1", acceptsChildren: true }],
      "container-1",
      "text"
    );

    expect(result.accepted).toBe(true);
    expect(result.targetId).toBe("container-1");
  });

  it("rejects a target that cannot contain children", () => {
    const result = resolveDropTarget(
      [{ id: "text-1", acceptsChildren: false }],
      "text-1",
      "image"
    );

    expect(result.accepted).toBe(false);
  });

  it("detects the target under a point", () => {
    const result = detectCollision(50, 50, [
      {
        id: "target-1",
        rect: { x: 0, y: 0, width: 100, height: 100 }
      }
    ]);

    expect(result?.id).toBe("target-1");
  });
});
