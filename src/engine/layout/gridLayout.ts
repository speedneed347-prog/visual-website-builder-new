import type { LayoutItem, LayoutConfig } from "./layoutEngine";

export type GridPosition = {
  id: string;
  row: number;
  column: number;
};

export function calculateGridLayout(
  items: LayoutItem[],
  config: LayoutConfig
): GridPosition[] {
  const columns = Math.max(1, Math.floor(config.columns ?? 2));

  return items.map((item, index) => ({
    id: item.id,
    row: item.row ?? Math.floor(index / columns),
    column: item.column ?? index % columns
  }));
}
