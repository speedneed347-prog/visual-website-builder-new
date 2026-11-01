export type ClipboardData<T> = {
  items: T[];
  copiedAt: number;
};

let clipboard: ClipboardData<unknown> | null = null;

export function setClipboard<T>(items: T[]) {
  clipboard = {
    items: structuredClone(items),
    copiedAt: Date.now()
  };
}

export function getClipboard<T>(): ClipboardData<T> | null {
  if (!clipboard) return null;

  return structuredClone(clipboard) as ClipboardData<T>;
}

export function clearClipboard() {
  clipboard = null;
}

export function hasClipboardData() {
  return clipboard !== null && clipboard.items.length > 0;
}
