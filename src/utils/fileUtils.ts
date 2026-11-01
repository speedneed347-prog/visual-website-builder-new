export function formatFileSize(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) return "0 B";

  const units = ["B", "KB", "MB", "GB", "TB"];
  let value = bytes;
  let index = 0;

  while (value >= 1024 && index < units.length - 1) {
    value /= 1024;
    index++;
  }

  return `${value.toFixed(index === 0 ? 0 : 1)} ${units[index]}`;
}

export function getFileExtension(filename: string) {
  const index = filename.lastIndexOf(".");
  return index > 0 ? filename.slice(index + 1).toLowerCase() : "";
}

export function sanitizeFilename(filename: string) {
  return filename
    .replace(/[<>:"/\\|?*\x00-\x1F]/g, "_")
    .trim()
    .slice(0, 180) || "untitled";
}
