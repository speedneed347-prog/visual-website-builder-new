import { generateId } from "../utils/idGenerator";

export type DocumentNode = {
  id: string;
  type: string;
  name?: string;
  props: Record<string, unknown>;
  styles: Record<string, unknown>;
  children: DocumentNode[];
  parentId?: string | null;
};

export type BuilderDocument = {
  id: string;
  version: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  root: DocumentNode;
  metadata: Record<string, unknown>;
};

export function createDocumentNode(
  type: string,
  props: Record<string, unknown> = {},
  children: DocumentNode[] = []
): DocumentNode {
  return {
    id: generateId(),
    type,
    name: type,
    props,
    styles: {},
    children,
    parentId: null
  };
}

export function createDocument(name = "Untitled Website"): BuilderDocument {
  const now = new Date().toISOString();

  return {
    id: generateId(),
    version: 1,
    name,
    createdAt: now,
    updatedAt: now,
    root: createDocumentNode("section", {}, []),
    metadata: {
      title: name,
      description: "",
      language: "en"
    }
  };
}
