export function normalizeLineEndings(source: string) {
  return source.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

export function trimTrailingWhitespace(source: string) {
  return normalizeLineEndings(source)
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .trim() + "\n";
}

export function indentCode(source: string, spaces = 2) {
  const prefix = " ".repeat(Math.max(0, spaces));

  return normalizeLineEndings(source)
    .split("\n")
    .map((line) => line.length ? prefix + line : line)
    .join("\n");
}
