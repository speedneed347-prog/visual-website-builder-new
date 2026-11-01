import { useEffect, useMemo, useState } from "react";
import { useDocumentStore } from "../stores/documentStore";
import { createAutosaveService } from "../services/storage/autosaveService";
import { localStorageAdapter } from "../services/storage/storageAdapter";

export function useAutosave(delay = 800) {
  const document = useDocumentStore((state) => state.document);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  const service = useMemo(
    () => createAutosaveService(localStorageAdapter, delay),
    [delay]
  );

  useEffect(() => {
    setStatus("saving");
    service.schedule(document);

    const timeout = setTimeout(() => {
      setStatus("saved");
    }, delay + 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [document, delay, service]);

  useEffect(() => {
    return () => {
      void service.flush().catch(() => setStatus("error"));
    };
  }, [service]);

  return { status, saveNow: service.flush };
}
