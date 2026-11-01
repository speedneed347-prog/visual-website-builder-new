import { create } from "zustand";

export type Project = {
  id: string;
  name: string;
  description?: string;
  updatedAt: string;
  thumbnail?: string;
};

type ProjectState = {
  projects: Project[];
  activeProjectId: string | null;
  setProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  setActiveProject: (id: string | null) => void;
};

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  activeProjectId: null,

  setProjects: (projects) => set({ projects }),

  addProject: (project) => set((state) => ({
    projects: [project, ...state.projects]
  })),

  updateProject: (id, updates) => set((state) => ({
    projects: state.projects.map((project) =>
      project.id === id ? { ...project, ...updates } : project
    )
  })),

  deleteProject: (id) => set((state) => ({
    projects: state.projects.filter((project) => project.id !== id),
    activeProjectId: state.activeProjectId === id ? null : state.activeProjectId
  })),

  setActiveProject: (id) => set({ activeProjectId: id })
}));
