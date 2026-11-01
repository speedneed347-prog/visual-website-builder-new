import { create } from "zustand";
import type { BuilderDocument, DocumentNode } from "../document/documentFactory";
import { createDocument } from "../document/documentFactory";
import {
  addNode,
  updateNode,
  removeNode,
  moveNode
} from "../document/nodeOperations";

type DocumentState = {
  document: BuilderDocument;
  setDocument: (document: BuilderDocument) => void;
  addElement: (parentId: string, node: DocumentNode, index?: number) => void;
  updateElement: (id: string, updates: Partial<DocumentNode>) => void;
  removeElement: (id: string) => void;
  moveElement: (id: string, parentId: string, index?: number) => void;
  resetDocument: () => void;
};

export const useDocumentStore = create<DocumentState>((set) => ({
  document: createDocument(),

  setDocument: (document) => set({ document }),

  addElement: (parentId, node, index) => set((state) => ({
    document: {
      ...state.document,
      root: addNode(state.document.root, parentId, node, index),
      updatedAt: new Date().toISOString()
    }
  })),

  updateElement: (id, updates) => set((state) => ({
    document: {
      ...state.document,
      root: updateNode(state.document.root, id, updates),
      updatedAt: new Date().toISOString()
    }
  })),

  removeElement: (id) => set((state) => ({
    document: {
      ...state.document,
      root: removeNode(state.document.root, id),
      updatedAt: new Date().toISOString()
    }
  })),

  moveElement: (id, parentId, index) => set((state) => ({
    document: {
      ...state.document,
      root: moveNode(state.document.root, id, parentId, index),
      updatedAt: new Date().toISOString()
    }
  })),

  resetDocument: () => set({ document: createDocument() })
}));
