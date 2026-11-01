export type StyleObject = Record<string, string | number | undefined | null>;

export function resolveStyles(
  ...sources: Array<StyleObject | undefined>
): StyleObject {
  return Object.assign({}, ...sources.filter(Boolean));
}

export function toCssPropertyName(property: string) {
  if (property.startsWith("--")) return property;

  return property.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

export function styleObjectToCss(styles: StyleObject): string {
  return Object.entries(styles)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => {
      const cssValue = typeof value === "number" &&
        !["opacity", "zIndex", "fontWeight", "lineHeight", "flex", "order"].includes(key)
        ? `${value}px`
        : String(value);

      return `${toCssPropertyName(key)}:${cssValue}`;
    })
    .join(";");
}
