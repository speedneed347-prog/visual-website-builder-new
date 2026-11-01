import type { BuilderDocument } from "../../document/documentFactory";
import type { StorageAdapter } from "./storageAdapter";

export function createAutosaveService(
  adapter: StorageAdapter,
  delay = 800
) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let pending: BuilderDocument | null = null;

  return {
    schedule(document: BuilderDocument) {
      pending = document;

      if (timer) clearTimeout(timer);

      timer = setTimeout(async () => {
        if (!pending) return;

        const current = pending;
        pending = null;
        timer = null;

        await adapter.save(current);
      }, delay);
    },

    async flush() {
      if (timer) clearTimeout(timer);
      timer = null;

      if (pending) {
        const current = pending;
        pending = null;
        await adapter.save(current);
      }
    },

    cancel() {
      if (timer) clearTimeout(timer);
      timer = null;
      pending = null;
    }
  };
}
