import type { BuilderDocument } from "../../document/documentFactory";
import { localProjectService } from "../local/localProjectService";

export type StorageAdapter = {
  save: (document: BuilderDocument) => Promise<void>;
  load: (id: string) => Promise<BuilderDocument | null>;
  remove: (id: string) => Promise<void>;
};

export const localStorageAdapter: StorageAdapter = {
  async save(document) {
    localProjectService.save(document);
  },

  async load(id) {
    return localProjectService.get(id)?.document ?? null;
  },

  async remove(id) {
    localProjectService.remove(id);
  }
};
