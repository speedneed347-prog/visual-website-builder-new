import type { SelectionState } from "./selectionEngine";

export function addToSelection(
  state: SelectionState,
  ids: string[]
): SelectionState {
  const selectedIds = [...new Set([...state.selectedIds, ...ids])];

  return {
    selectedIds,
    primaryId: ids.at(-1) ?? state.primaryId
  };
}

export function removeFromSelection(
  state: SelectionState,
  ids: string[]
): SelectionState {
  const removed = new Set(ids);
  const selectedIds = state.selectedIds.filter((id) => !removed.has(id));

  return {
    selectedIds,
    primaryId: selectedIds.includes(state.primaryId ?? "")
      ? state.primaryId
      : selectedIds.at(-1) ?? null
  };
}

export function toggleSelection(
  state: SelectionState,
  id: string
): SelectionState {
  return state.selectedIds.includes(id)
    ? removeFromSelection(state, [id])
    : addToSelection(state, [id]);
}
