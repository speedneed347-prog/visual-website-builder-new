import { undoHistory } from "./historyEngine";
import type { HistoryState } from "./historyEngine";

export function undo<T>(history: HistoryState<T>) {
  return undoHistory(history);
}
