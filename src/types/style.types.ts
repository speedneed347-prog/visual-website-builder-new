import type { CSSProperties } from "react";

export type BuilderStyle = CSSProperties & {
  [key: string]: string | number | undefined;
};

export type DimensionValue = number | string;

export type SpacingStyle = {
  margin?: DimensionValue;
  marginTop?: DimensionValue;
  marginRight?: DimensionValue;
  marginBottom?: DimensionValue;
  marginLeft?: DimensionValue;
  padding?: DimensionValue;
  paddingTop?: DimensionValue;
  paddingRight?: DimensionValue;
  paddingBottom?: DimensionValue;
  paddingLeft?: DimensionValue;
};

export type PositionStyle = {
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  top?: DimensionValue;
  right?: DimensionValue;
  bottom?: DimensionValue;
  left?: DimensionValue;
  zIndex?: number;
};
