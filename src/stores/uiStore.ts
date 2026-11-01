import { create } from "zustand";

type Panel = "elements" | "layers" | "pages" | "assets";

type UIState = {
  activePanel: Panel;
  rightSidebarOpen: boolean;
  bottomPanelOpen: boolean;
  activeBottomTab: "console" | "issues";
  setActivePanel: (panel: Panel) => void;
  toggleRightSidebar: () => void;
  toggleBottomPanel: () => void;
  setBottomTab: (tab: UIState["activeBottomTab"]) => void;
};

export const useUIStore = create<UIState>((set) => ({
  activePanel: "elements",
  rightSidebarOpen: true,
  bottomPanelOpen: false,
  activeBottomTab: "console",

  setActivePanel: (activePanel) => set({ activePanel }),
  toggleRightSidebar: () => set((state) => ({
    rightSidebarOpen: !state.rightSidebarOpen
  })),
  toggleBottomPanel: () => set((state) => ({
    bottomPanelOpen: !state.bottomPanelOpen
  })),
  setBottomTab: (activeBottomTab) => set({ activeBottomTab })
}));
