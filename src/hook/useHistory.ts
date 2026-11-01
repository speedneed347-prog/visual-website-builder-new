import { useDocumentStore } from "../stores/documentStore";
import { createHistoryStore } from "../stores/historyStore";
import { useState } from "react";

export function useHistory() {
  const document = useDocumentStore((state) => state.document);

  const [historyStore] = useState(() =>
    createHistoryStore(document)
  );

  const history = historyStore((state) => state.history);
  const record = historyStore((state) => state.record);
  const undo = historyStore((state) => state.undo);
  const redo = historyStore((state) => state.redo);

  const setDocument = useDocumentStore((state) => state.setDocument);

  return {
    canUndo: history.past.length > 0,
    canRedo: history.future.length > 0,
    record,
    undo: () => {
      undo();
      const previous = historyStore.getState().history.present;
      setDocument(previous);
    },
    redo: () => {
      redo();
      const next = historyStore.getState().history.present;
      setDocument(next);
    }
  };
}
