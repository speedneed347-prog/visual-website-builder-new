import type { DocumentNode } from "../../document/documentFactory";
import { styleObjectToCss } from "../../renderer/StyleResolver";

export function compileResponsiveCss(root: DocumentNode): string {
  const tabletRules: string[] = [];
  const mobileRules: string[] = [];

  function visit(node: DocumentNode) {
    const responsive = node.props.responsive as
      | { tablet?: Record<string, string | number>; mobile?: Record<string, string | number> }
      | undefined;

    if (responsive?.tablet) {
      tabletRules.push(
        `[data-element-id="${node.id}"]{${styleObjectToCss(responsive.tablet)}}`
      );
    }

    if (responsive?.mobile) {
      mobileRules.push(
        `[data-element-id="${node.id}"]{${styleObjectToCss(responsive.mobile)}}`
      );
    }

    node.children.forEach(visit);
  }

  visit(root);

  return `
@media(max-width:1024px){${tabletRules.join("\n")}}
@media(max-width:767px){${mobileRules.join("\n")}}
`;
}
