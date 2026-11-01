import { calculateFlexLayout } from "./flexLayout";
import { calculateGridLayout } from "./gridLayout";
import { calculateAbsoluteLayout } from "./absoluteLayout";

export type LayoutMode = "flex" | "grid" | "absolute";

export type LayoutItem = {
  id: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  row?: number;
  column?: number;
};

export type LayoutConfig = {
  mode: LayoutMode;
  gap?: number;
  columns?: number;
  direction?: "row" | "column";
};

export function calculateLayout(
  items: LayoutItem[],
  config: LayoutConfig
) {
  switch (config.mode) {
    case "flex":
      return calculateFlexLayout(items, config);
    case "grid":
      return calculateGridLayout(items, config);
    case "absolute":
      return calculateAbsoluteLayout(items);
  }
}
