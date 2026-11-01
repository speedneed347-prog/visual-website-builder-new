import { useCallback } from "react";
import { useDocumentStore } from "../stores/documentStore";
import { useSelectionStore } from "../stores/selectionStore";
import { createDocumentNode } from "../document/documentFactory";

export function useCanvas() {
  const document = useDocumentStore((state) => state.document);
  const addElement = useDocumentStore((state) => state.addElement);
  const removeElement = useDocumentStore((state) => state.removeElement);
  const updateElement = useDocumentStore((state) => state.updateElement);
  const moveElement = useDocumentStore((state) => state.moveElement);
  const select = useSelectionStore((state) => state.select);

  const add = useCallback((type: string, parentId = document.root.id) => {
    const node = createDocumentNode(type);
    addElement(parentId, node);
    select(node.id);
    return node.id;
  }, [document.root.id, addElement, select]);

  const remove = useCallback((id: string) => {
    removeElement(id);
  }, [removeElement]);

  const update = useCallback((id: string, updates: Record<string, unknown>) => {
    updateElement(id, updates);
  }, [updateElement]);

  const move = useCallback((id: string, parentId: string, index?: number) => {
    moveElement(id, parentId, index);
  }, [moveElement]);

  return { document, add, remove, update, move };
}
