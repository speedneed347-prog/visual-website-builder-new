import { getClipboard } from "./clipboardEngine";
import { generateId } from "../../utils/idGenerator";

type PasteableElement = {
  id: string;
  [key: string]: unknown;
};

export function pasteElements<T extends PasteableElement>(
  offset = 20
): T[] {
  const clipboard = getClipboard<T>();

  if (!clipboard) return [];

  return clipboard.items.map((item) => {
    const copy = structuredClone(item);

    return {
      ...copy,
      id: generateId(),
      x: typeof copy.x === "number" ? copy.x + offset : copy.x,
      y: typeof copy.y === "number" ? copy.y + offset : copy.y
    };
  });
}
