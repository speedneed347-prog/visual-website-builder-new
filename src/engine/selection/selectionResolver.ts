export type SelectableNode = {
  id: string;
  parentId?: string | null;
  locked?: boolean;
  hidden?: boolean;
};

export function resolveSelectableNode(
  nodes: SelectableNode[],
  id: string
): SelectableNode | null {
  const node = nodes.find((item) => item.id === id);

  if (!node || node.locked || node.hidden) return null;

  return node;
}

export function getSelectionAncestors(
  nodes: SelectableNode[],
  id: string
): SelectableNode[] {
  const result: SelectableNode[] = [];
  let current = nodes.find((node) => node.id === id);

  while (current?.parentId) {
    const parent = nodes.find((node) => node.id === current?.parentId);
    if (!parent) break;
    result.push(parent);
    current = parent;
  }

  return result;
}
