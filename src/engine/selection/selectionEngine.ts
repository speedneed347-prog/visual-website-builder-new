export type SelectionState = {
  selectedIds: string[];
  primaryId: string | null;
};

export function createSelectionState(): SelectionState {
  return { selectedIds: [], primaryId: null };
}

export function selectElement(
  state: SelectionState,
  id: string,
  additive = false
): SelectionState {
  const selectedIds = additive
    ? state.selectedIds.includes(id)
      ? state.selectedIds
      : [...state.selectedIds, id]
    : [id];

  return { selectedIds, primaryId: id };
}

export function clearSelection(): SelectionState {
  return createSelectionState();
}

export function isSelected(state: SelectionState, id: string) {
  return state.selectedIds.includes(id);
}
