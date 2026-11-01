import type { LayoutItem, LayoutConfig } from "./layoutEngine";

export type FlexPosition = {
  id: string;
  order: number;
  gapBefore: number;
};

export function calculateFlexLayout(
  items: LayoutItem[],
  config: LayoutConfig
): FlexPosition[] {
  const gap = Math.max(0, config.gap ?? 0);

  return items.map((item, index) => ({
    id: item.id,
    order: index,
    gapBefore: index === 0 ? 0 : gap
  }));
}
