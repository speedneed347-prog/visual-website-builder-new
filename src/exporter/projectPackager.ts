export type ProjectFile = {
  path: string;
  content: string | Blob;
};

export function createProjectFiles(
  files: Record<string, string>
): ProjectFile[] {
  return Object.entries(files).map(([path, content]) => ({
    path: path.replace(/^\/+/, ""),
    content
  }));
}

export function validateProjectFiles(files: ProjectFile[]) {
  const paths = new Set<string>();
  const errors: string[] = [];

  for (const file of files) {
    if (!file.path || file.path.includes("..")) {
      errors.push(`Unsafe file path: ${file.path}`);
    }

    if (paths.has(file.path)) {
      errors.push(`Duplicate file path: ${file.path}`);
    }

    paths.add(file.path);
  }

  return { valid: errors.length === 0, errors };
}
