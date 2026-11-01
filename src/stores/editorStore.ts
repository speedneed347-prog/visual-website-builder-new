import { create } from "zustand";

type EditorMode = "design" | "preview";

type EditorState = {
  mode: EditorMode;
  zoom: number;
  device: "desktop" | "tablet" | "mobile";
  setMode: (mode: EditorMode) => void;
  setZoom: (zoom: number) => void;
  setDevice: (device: EditorState["device"]) => void;
};

export const useEditorStore = create<EditorState>((set) => ({
  mode: "design",
  zoom: 1,
  device: "desktop",

  setMode: (mode) => set({ mode }),
  setZoom: (zoom) => set({ zoom: Math.min(2, Math.max(0.25, zoom)) }),
  setDevice: (device) => set({ device })
}));
