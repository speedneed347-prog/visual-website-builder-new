import type { LayoutItem } from "./layoutEngine";

export type AbsolutePosition = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export function calculateAbsoluteLayout(
  items: LayoutItem[]
): AbsolutePosition[] {
  return items.map((item) => ({
    id: item.id,
    x: item.x ?? 0,
    y: item.y ?? 0,
    width: item.width ?? 100,
    height: item.height ?? 40
  }));
}
