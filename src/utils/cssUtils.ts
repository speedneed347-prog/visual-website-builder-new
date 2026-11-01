export function toKebabCase(value: string) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

export function toCamelCase(value: string) {
  return value.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());
}

export function normalizeCssValue(
  property: string,
  value: string | number
): string {
  if (typeof value === "string") return value;

  const unitless = new Set([
    "opacity", "zIndex", "fontWeight", "lineHeight",
    "flex", "order", "zoom"
  ]);

  return unitless.has(property) || value === 0
    ? String(value)
    : `${value}px`;
}

export function sanitizeCssIdentifier(value: string) {
  return value.replace(/[^a-zA-Z0-9_-]/g, "-");
}
