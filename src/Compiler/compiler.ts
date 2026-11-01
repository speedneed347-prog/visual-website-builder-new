import type { BuilderDocument } from "../document/documentFactory";
import { compileHtml } from "./html/htmlCompiler";
import { compileCss } from "./css/cssCompiler";
import { compileJavaScript } from "./javascript/jsCompiler";
import { compileReact } from "./react/reactCompiler";

export type CompileTarget = "html" | "react";

export type CompileResult = {
  files: Record<string, string>;
  errors: string[];
  warnings: string[];
};

export function compileDocument(
  document: BuilderDocument,
  target: CompileTarget
): CompileResult {
  try {
    if (target === "html") {
      return {
        files: {
          "index.html": compileHtml(document),
          "styles.css": compileCss(document),
          "script.js": compileJavaScript(document)
        },
        errors: [],
        warnings: []
      };
    }

    return {
      files: compileReact(document),
      errors: [],
      warnings: []
    };
  } catch (error) {
    return {
      files: {},
      errors: [error instanceof Error ? error.message : "Compilation failed"],
      warnings: []
    };
  }
}
