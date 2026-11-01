export type DropTarget = {
  id: string;
  acceptsChildren: boolean;
  disabled?: boolean;
};

export type DropResolution = {
  accepted: boolean;
  targetId: string | null;
  reason?: string;
};

export function resolveDropTarget(
  targets: DropTarget[],
  targetId: string | null,
  draggedType?: string
): DropResolution {
  if (!targetId) {
    return { accepted: true, targetId: null };
  }

  const target = targets.find((item) => item.id === targetId);

  if (!target) {
    return { accepted: false, targetId: null, reason: "Target not found" };
  }

  if (target.disabled) {
    return { accepted: false, targetId, reason: "Target is disabled" };
  }

  if (!target.acceptsChildren) {
    return { accepted: false, targetId, reason: "Target cannot contain children" };
  }

  if (draggedType === "page") {
    return { accepted: false, targetId, reason: "Pages cannot be nested" };
  }

  return { accepted: true, targetId };
}
