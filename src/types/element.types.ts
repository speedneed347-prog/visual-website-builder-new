import type { CSSProperties, ReactNode } from "react";

export type ElementType =
  | "text" | "heading" | "image" | "video"
  | "button" | "link" | "icon" | "divider"
  | "section" | "container" | "flex" | "grid"
  | "row" | "column" | "stack" | "spacer"
  | "form" | "input" | "textarea" | "select"
  | "checkbox" | "radio" | "navbar" | "card"
  | "accordion" | "tabs" | "modal" | "carousel"
  | "gallery" | "table";

export type ElementProps = Record<string, unknown>;

export type ElementComponentProps = {
  id?: string;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  [key: string]: unknown;
};

export type ElementCategory =
  | "basic"
  | "layout"
  | "forms"
  | "advanced";
