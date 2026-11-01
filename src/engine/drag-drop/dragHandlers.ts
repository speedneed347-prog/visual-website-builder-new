export type DragPayload = {
  id: string;
  type: string;
  source: "sidebar" | "canvas";
  data?: Record<string, unknown>;
};

export function createDragPayload(
  type: string,
  source: DragPayload["source"],
  data: Record<string, unknown> = {}
): DragPayload {
  return {
    id: `${type}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    source,
    data
  };
}

export function writeDragPayload(
  event: DragEvent,
  payload: DragPayload
) {
  event.dataTransfer?.setData("application/x-visual-builder", JSON.stringify(payload));
  if (event.dataTransfer) event.dataTransfer.effectAllowed = "copyMove";
}

export function readDragPayload(event: DragEvent): DragPayload | null {
  const raw = event.dataTransfer?.getData("application/x-visual-builder");
  if (!raw) return null;

  try {
    const value = JSON.parse(raw) as DragPayload;
    if (!value || typeof value.id !== "string" || typeof value.type !== "string") {
      return null;
    }
    return value;
  } catch {
    return null;
  }
}
