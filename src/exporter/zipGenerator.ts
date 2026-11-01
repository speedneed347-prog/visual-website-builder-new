import JSZip from "jszip";
import type { ProjectFile } from "./projectPackager";

export async function generateZip(files: ProjectFile[]): Promise<Blob> {
  const zip = new JSZip();

  for (const file of files) {
    zip.file(file.path, file.content);
  }

  return zip.generateAsync({
    type: "blob",
    compression: "DEFLATE",
    compressionOptions: { level: 6 }
  });
}

export async function downloadZip(
  files: ProjectFile[],
  filename = "website-project.zip"
) {
  const blob = await generateZip(files);
  const url = URL.createObjectURL(blob);

  try {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
  } finally {
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}
