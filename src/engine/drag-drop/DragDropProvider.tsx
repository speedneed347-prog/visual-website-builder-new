import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

type DragItem = {
  id: string;
  type: string;
  source: "sidebar" | "canvas";
  data?: Record<string, unknown>;
};

type DragDropContextValue = {
  activeItem: DragItem | null;
  startDrag: (item: DragItem) => void;
  endDrag: () => void;
};

const DragDropContext = createContext<DragDropContextValue | null>(null);

export function DragDropProvider({ children }: { children: ReactNode }) {
  const [activeItem, setActiveItem] = useState<DragItem | null>(null);

  const value = useMemo(() => ({
    activeItem,
    startDrag: (item: DragItem) => setActiveItem(item),
    endDrag: () => setActiveItem(null)
  }), [activeItem]);

  return (
    <DragDropContext.Provider value={value}>
      {children}
    </DragDropContext.Provider>
  );
}

export function useDragDrop() {
  const context = useContext(DragDropContext);
  if (!context) {
    throw new Error("useDragDrop must be used inside DragDropProvider");
  }
  return context;
}
