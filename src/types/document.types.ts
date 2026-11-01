import type { DocumentNode, BuilderDocument } from "../document/documentFactory";

export type {
  DocumentNode,
  BuilderDocument
};

export type DocumentMetadata = {
  title: string;
  description: string;
  language: string;
  favicon?: string;
};

export type DocumentChange = {
  documentId: string;
  nodeId?: string;
  action: "add" | "update" | "remove" | "move";
  timestamp: string;
};
