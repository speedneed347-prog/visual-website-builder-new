export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type CollisionTarget = {
  id: string;
  rect: Rect;
  priority?: number;
};

export function containsPoint(rect: Rect, x: number, y: number) {
  return (
    x >= rect.x &&
    y >= rect.y &&
    x <= rect.x + rect.width &&
    y <= rect.y + rect.height
  );
}

export function detectCollision(
  x: number,
  y: number,
  targets: CollisionTarget[]
): CollisionTarget | null {
  const matches = targets
    .filter((target) => containsPoint(target.rect, x, y))
    .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));

  return matches[0] ?? null;
}
