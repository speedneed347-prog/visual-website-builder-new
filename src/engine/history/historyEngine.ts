export type HistoryState<T> = {
  past: T[];
  present: T;
  future: T[];
};

export function createHistory<T>(initial: T): HistoryState<T> {
  return { past: [], present: initial, future: [] };
}

export function pushHistory<T>(
  state: HistoryState<T>,
  next: T,
  limit = 100
): HistoryState<T> {
  if (Object.is(state.present, next)) return state;

  return {
    past: [...state.past, state.present].slice(-limit),
    present: next,
    future: []
  };
}

export function undoHistory<T>(state: HistoryState<T>): HistoryState<T> {
  if (!state.past.length) return state;

  const previous = state.past[state.past.length - 1];

  return {
    past: state.past.slice(0, -1),
    present: previous,
    future: [state.present, ...state.future]
  };
}

export function redoHistory<T>(state: HistoryState<T>): HistoryState<T> {
  if (!state.future.length) return state;

  const next = state.future[0];

  return {
    past: [...state.past, state.present],
    present: next,
    future: state.future.slice(1)
  };
}
