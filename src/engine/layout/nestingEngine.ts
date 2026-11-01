export type NestableNode = {
  id: string;
  parentId?: string | null;
  children?: string[];
};

export function canNest(
  nodes: NestableNode[],
  childId: string,
  parentId: string
): boolean {
  if (childId === parentId) return false;

  const parent = nodes.find((node) => node.id === parentId);
  const child = nodes.find((node) => node.id === childId);

  if (!parent || !child) return false;

  let current: NestableNode | undefined = parent;

  while (current) {
    if (current.id === childId) return false;
    current = nodes.find((node) => node.id === current?.parentId);
  }

  return true;
}

export function getDescendantIds(
  nodes: NestableNode[],
  parentId: string
): string[] {
  const result: string[] = [];

  function visit(id: string) {
    const node = nodes.find((item) => item.id === id);
    for (const childId of node?.children ?? []) {
      result.push(childId);
      visit(childId);
    }
  }

  visit(parentId);
  return result;
}
