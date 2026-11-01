import { create } from "zustand";

type SelectionState = {
  selectedIds: string[];
  primaryId: string | null;
  select: (id: string, additive?: boolean) => void;
  selectMany: (ids: string[]) => void;
  toggle: (id: string) => void;
  clear: () => void;
};

export const useSelectionStore = create<SelectionState>((set) => ({
  selectedIds: [],
  primaryId: null,

  select: (id, additive = false) => set((state) => ({
    selectedIds: additive
      ? [...new Set([...state.selectedIds, id])]
      : [id],
    primaryId: id
  })),

  selectMany: (ids) => set({
    selectedIds: [...new Set(ids)],
    primaryId: ids.at(-1) ?? null
  }),

  toggle: (id) => set((state) => {
    const exists = state.selectedIds.includes(id);
    const selectedIds = exists
      ? state.selectedIds.filter((item) => item !== id)
      : [...state.selectedIds, id];

    return {
      selectedIds,
      primaryId: selectedIds.at(-1) ?? null
    };
  }),

  clear: () => set({ selectedIds: [], primaryId: null })
}));
