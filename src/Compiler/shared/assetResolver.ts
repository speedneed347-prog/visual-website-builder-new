export type ExportAsset = {
  id: string;
  name: string;
  url: string;
  mimeType?: string;
};

export function resolveAssetUrl(
  source: string,
  assets: ExportAsset[],
  exportedPrefix = "assets/"
) {
  const asset = assets.find(
    (item) => item.id === source || item.url === source
  );

  if (!asset) return source;

  return `${exportedPrefix}${asset.name.replace(/[\\/]/g, "_")}`;
}

export function collectAssetReferences(value: unknown): string[] {
  const found = new Set<string>();

  function visit(item: unknown) {
    if (!item || typeof item !== "object") return;

    if (Array.isArray(item)) {
      item.forEach(visit);
      return;
    }

    for (const [key, child] of Object.entries(item)) {
      if (
        typeof child === "string" &&
        ["src", "poster", "backgroundImage"].includes(key)
      ) {
        found.add(child);
      } else {
        visit(child);
      }
    }
  }

  visit(value);
  return [...found];
}
