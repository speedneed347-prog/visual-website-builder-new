import type { BuilderDocument } from "./document.types";

export type PageStatus = "published" | "draft";

export type WebsitePage = {
  id: string;
  projectId: string;
  name: string;
  slug: string;
  status: PageStatus;
  document: BuilderDocument;
  createdAt: string;
  updatedAt: string;
};

export type PageRoute = {
  pageId: string;
  path: string;
};
