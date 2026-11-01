import { readDragPayload } from "./dragHandlers";

export type DropResult = {
  accepted: boolean;
  payload: ReturnType<typeof readDragPayload>;
  targetId?: string;
};

export function handleDragOver(event: DragEvent) {
  const hasPayload = event.dataTransfer?.types.includes(
    "application/x-visual-builder"
  );

  if (hasPayload) {
    event.preventDefault();
    if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
  }
}

export function handleDrop(event: DragEvent, targetId?: string): DropResult {
  event.preventDefault();

  const payload = readDragPayload(event);

  return {
    accepted: payload !== null,
    payload,
    targetId
  };
}
