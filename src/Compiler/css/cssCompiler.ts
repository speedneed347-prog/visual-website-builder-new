import type { DocumentNode, BuilderDocument } from "../../document/documentFactory";
import { styleObjectToCss } from "../../renderer/StyleResolver";
import { compileResponsiveCss } from "./responsiveCompiler";
import { compileAnimations } from "./animationCompiler";

function collectStyles(node: DocumentNode): string[] {
  const declarations = styleObjectToCss(
    node.styles as Record<string, string | number>
  );

  const ownRule = declarations
    ? `[data-element-id="${node.id}"]{${declarations}}`
    : "";

  return [
    ownRule,
    ...node.children.flatMap(collectStyles)
  ].filter(Boolean);
}

export function compileCss(document: BuilderDocument): string {
  const base = collectStyles(document.root).join("\n");
  const responsive = compileResponsiveCss(document.root);
  const animations = compileAnimations(document.root);

  return `*{box-sizing:border-box}
html,body{margin:0;min-height:100%;font-family:Arial,sans-serif}
img,video{max-width:100%}
${base}
${responsive}
${animations}`;
}
