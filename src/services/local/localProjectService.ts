import type { BuilderDocument } from "../../document/documentFactory";

const STORAGE_KEY = "visual-builder-projects";

export type LocalProject = {
  id: string;
  name: string;
  document: BuilderDocument;
  updatedAt: string;
};

function readProjects(): LocalProject[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as LocalProject[] : [];
  } catch {
    return [];
  }
}

function writeProjects(projects: LocalProject[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export const localProjectService = {
  list(): LocalProject[] {
    return readProjects();
  },

  get(id: string) {
    return readProjects().find((project) => project.id === id) ?? null;
  },

  save(document: BuilderDocument) {
    const projects = readProjects();
    const project: LocalProject = {
      id: document.id,
      name: document.name,
      document,
      updatedAt: new Date().toISOString()
    };

    const index = projects.findIndex((item) => item.id === document.id);

    if (index >= 0) projects[index] = project;
    else projects.unshift(project);

    writeProjects(projects);
    return project;
  },

  remove(id: string) {
    writeProjects(readProjects().filter((project) => project.id !== id));
  }
};
