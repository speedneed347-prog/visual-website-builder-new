import { setClipboard } from "./clipboardEngine";

export type CopyableElement = {
  id: string;
  [key: string]: unknown;
};

export function copyElements<T extends CopyableElement>(
  elements: T[],
  selectedIds: string[]
) {
  const selected = new Set(selectedIds);
  const items = elements.filter((element) => selected.has(element.id));

  setClipboard(items);

  return items.length;
}
