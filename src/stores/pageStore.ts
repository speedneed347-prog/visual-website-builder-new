import { create } from "zustand";
import { generateId } from "../utils/idGenerator";

export type BuilderPage = {
  id: string;
  name: string;
  slug: string;
};

type PageState = {
  pages: BuilderPage[];
  activePageId: string | null;
  addPage: (name: string) => void;
  renamePage: (id: string, name: string) => void;
  removePage: (id: string) => void;
  setActivePage: (id: string) => void;
};

export const usePageStore = create<PageState>((set) => ({
  pages: [{ id: "home", name: "Home", slug: "/" }],
  activePageId: "home",

  addPage: (name) => set((state) => {
    const slug = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
    const page = { id: generateId(), name, slug: `/${slug}` };
    return { pages: [...state.pages, page] };
  }),

  renamePage: (id, name) => set((state) => ({
    pages: state.pages.map((page) =>
      page.id === id
        ? { ...page, name, slug: `/${name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-")}` }
        : page
    )
  })),

  removePage: (id) => set((state) => {
    const pages = state.pages.filter((page) => page.id !== id);
    return {
      pages,
      activePageId: state.activePageId === id
        ? pages[0]?.id ?? null
        : state.activePageId
    };
  }),

  setActivePage: (id) => set({ activePageId: id })
}));
