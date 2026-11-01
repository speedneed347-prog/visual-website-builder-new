export type AlignRect = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export type Alignment = "left" | "center" | "right" | "top" | "middle" | "bottom";

export function alignItems(
  items: AlignRect[],
  alignment: Alignment
): AlignRect[] {
  if (!items.length) return [];

  const left = Math.min(...items.map((item) => item.x));
  const top = Math.min(...items.map((item) => item.y));
  const right = Math.max(...items.map((item) => item.x + item.width));
  const bottom = Math.max(...items.map((item) => item.y + item.height));
  const centerX = (left + right) / 2;
  const centerY = (top + bottom) / 2;

  return items.map((item) => {
    switch (alignment) {
      case "left": return { ...item, x: left };
      case "center": return { ...item, x: centerX - item.width / 2 };
      case "right": return { ...item, x: right - item.width };
      case "top": return { ...item, y: top };
      case "middle": return { ...item, y: centerY - item.height / 2 };
      case "bottom": return { ...item, y: bottom - item.height };
    }
  });
}
