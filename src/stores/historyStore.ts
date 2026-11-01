import { create } from "zustand";

type HistoryState<T> = {
  past: T[];
  present: T;
  future: T[];
};

type HistoryStore<T> = {
  history: HistoryState<T>;
  record: (value: T) => void;
  undo: () => void;
  redo: () => void;
  reset: (value: T) => void;
};

export function createHistoryStore<T>(initialValue: T) {
  return create<HistoryStore<T>>((set) => ({
    history: {
      past: [],
      present: initialValue,
      future: []
    },

    record: (value) => set((state) => ({
      history: {
        past: [...state.history.past, state.history.present].slice(-100),
        present: value,
        future: []
      }
    })),

    undo: () => set((state) => {
      const { past, present, future } = state.history;
      if (!past.length) return state;

      return {
        history: {
          past: past.slice(0, -1),
          present: past[past.length - 1],
          future: [present, ...future]
        }
      };
    }),

    redo: () => set((state) => {
      const { past, present, future } = state.history;
      if (!future.length) return state;

      return {
        history: {
          past: [...past, present],
          present: future[0],
          future: future.slice(1)
        }
      };
    }),

    reset: (value) => set({
      history: { past: [], present: value, future: [] }
    })
  }));
}
