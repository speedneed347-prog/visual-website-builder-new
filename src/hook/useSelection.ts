import { useSelectionStore } from "../stores/selectionStore";
import { useDocumentStore } from "../stores/documentStore";
import { findNode } from "../document/treeOperations";

export function useSelection() {
  const selectedIds = useSelectionStore((state) => state.selectedIds);
  const primaryId = useSelectionStore((state) => state.primaryId);
  const select = useSelectionStore((state) => state.select);
  const selectMany = useSelectionStore((state) => state.selectMany);
  const toggle = useSelectionStore((state) => state.toggle);
  const clear = useSelectionStore((state) => state.clear);

  const root = useDocumentStore((state) => state.document.root);

  const selectedNode = primaryId ? findNode(root, primaryId) : null;

  return {
    selectedIds,
    primaryId,
    selectedNode,
    select,
    selectMany,
    toggle,
    clear
  };
}
