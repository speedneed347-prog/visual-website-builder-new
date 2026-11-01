import type { DocumentNode } from "./documentFactory";
import { findNode, findParent } from "./treeOperations";

export function addNode(
  root: DocumentNode,
  parentId: string,
  node: DocumentNode,
  index?: number
): DocumentNode {
  const next = structuredClone(root);
  const parent = findNode(next, parentId);

  if (!parent) throw new Error("Parent node not found");

  node.parentId = parentId;

  const position = index === undefined
    ? parent.children.length
    : Math.max(0, Math.min(index, parent.children.length));

  parent.children.splice(position, 0, structuredClone(node));
  return next;
}

export function updateNode(
  root: DocumentNode,
  id: string,
  updates: Partial<DocumentNode>
): DocumentNode {
  const next = structuredClone(root);
  const node = findNode(next, id);

  if (!node) throw new Error("Node not found");

  Object.assign(node, updates, { id: node.id });
  return next;
}

export function removeNode(root: DocumentNode, id: string): DocumentNode {
  if (root.id === id) throw new Error("Cannot remove document root");

  const next = structuredClone(root);
  const parent = findParent(next, id);

  if (!parent) return next;

  parent.children = parent.children.filter((child) => child.id !== id);
  return next;
}

export function moveNode(
  root: DocumentNode,
  nodeId: string,
  targetParentId: string,
  index?: number
): DocumentNode {
  if (nodeId === root.id) throw new Error("Cannot move document root");

  const next = structuredClone(root);
  const sourceParent = findParent(next, nodeId);
  const targetParent = findNode(next, targetParentId);

  if (!sourceParent || !targetParent) {
    throw new Error("Source or target parent not found");
  }

  const movingNode = sourceParent.children.find((child) => child.id === nodeId);
  if (!movingNode) throw new Error("Node not found");

  const containsTarget = (node: DocumentNode, id: string): boolean =>
    node.id === id || node.children.some((child) => containsTarget(child, id));

  if (containsTarget(movingNode, targetParentId)) {
    throw new Error("Cannot move a node inside its own descendant");
  }

  sourceParent.children = sourceParent.children.filter((child) => child.id !== nodeId);
  movingNode.parentId = targetParentId;

  const position = index === undefined
    ? targetParent.children.length
    : Math.max(0, Math.min(index, targetParent.children.length));

  targetParent.children.splice(position, 0, movingNode);
  return next;
}
