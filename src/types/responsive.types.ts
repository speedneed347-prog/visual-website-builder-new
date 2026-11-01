import type { BuilderStyle } from "./style.types";

export type ResponsiveDevice = "desktop" | "tablet" | "mobile";

export type ResponsiveStyle = {
  desktop?: BuilderStyle;
  tablet?: BuilderStyle;
  mobile?: BuilderStyle;
};

export type BreakpointConfig = {
  desktop: number;
  tablet: number;
  mobile: number;
};

export type ResponsiveElementConfig = {
  styles: ResponsiveStyle;
  visibility?: Partial<Record<ResponsiveDevice, boolean>>;
};
