import type { BuilderDocument } from "./document.types";

export type ProjectStatus = "active" | "archived";

export type ProjectType = "website" | "landing-page" | "portfolio";

export type ProjectRecord = {
  id: string;
  ownerId?: string;
  name: string;
  description?: string;
  type: ProjectType;
  status: ProjectStatus;
  document: BuilderDocument;
  createdAt: string;
  updatedAt: string;
  thumbnail?: string;
};
