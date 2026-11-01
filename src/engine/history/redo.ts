import { redoHistory } from "./historyEngine";
import type { HistoryState } from "./historyEngine";

export function redo<T>(history: HistoryState<T>) {
  return redoHistory(history);
}
