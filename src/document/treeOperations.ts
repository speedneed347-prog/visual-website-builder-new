import type { DocumentNode } from "./documentFactory";

export function findNode(
  root: DocumentNode,
  id: string
): DocumentNode | null {
  if (root.id === id) return root;

  for (const child of root.children) {
    const result = findNode(child, id);
    if (result) return result;
  }

  return null;
}

export function findParent(
  root: DocumentNode,
  childId: string
): DocumentNode | null {
  for (const child of root.children) {
    if (child.id === childId) return root;

    const result = findParent(child, childId);
    if (result) return result;
  }

  return null;
}

export function flattenTree(root: DocumentNode): DocumentNode[] {
  return [root, ...root.children.flatMap(flattenTree)];
}

export function countNodes(root: DocumentNode): number {
  return 1 + root.children.reduce(
    (total, child) => total + countNodes(child),
    0
  );
}
