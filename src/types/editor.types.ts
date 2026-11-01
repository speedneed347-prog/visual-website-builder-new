export type EditorMode = "design" | "preview";

export type EditorDevice = "desktop" | "tablet" | "mobile";

export type EditorPanel =
  | "elements"
  | "layers"
  | "pages"
  | "components"
  | "assets";

export type EditorSelection = {
  ids: string[];
  primaryId: string | null;
};

export type EditorViewport = {
  zoom: number;
  scrollX: number;
  scrollY: number;
  width: number;
  height: number;
};
