import { styleObjectToCss } from "../../renderer/StyleResolver";

export function serializeCssRule(
  selector: string,
  styles: Record<string, string | number | undefined | null>
): string {
  const declarations = styleObjectToCss(styles);
  if (!declarations) return "";

  return `${selector}{${declarations}}`;
}

export function serializeCssRules(
  rules: Array<{
    selector: string;
    styles: Record<string, string | number | undefined | null>;
  }>
) {
  return rules
    .map((rule) => serializeCssRule(rule.selector, rule.styles))
    .filter(Boolean)
    .join("\n");
}
