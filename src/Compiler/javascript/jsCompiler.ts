import type { BuilderDocument } from "../../document/documentFactory";
import { compileInteractions } from "./interactionCompiler";
import { generateRuntime } from "./runtimeGenerator";

export function compileJavaScript(document: BuilderDocument): string {
  return `${generateRuntime()}\n${compileInteractions(document)}`;
}
