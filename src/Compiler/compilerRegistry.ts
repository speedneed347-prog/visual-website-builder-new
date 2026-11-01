import type { BuilderDocument } from "../document/documentFactory";

export type CompilerPlugin = {
  id: string;
  label: string;
  compile: (document: BuilderDocument) => Record<string, string>;
};

export class CompilerRegistry {
  private compilers = new Map<string, CompilerPlugin>();

  register(compiler: CompilerPlugin) {
    this.compilers.set(compiler.id, compiler);
  }

  unregister(id: string) {
    this.compilers.delete(id);
  }

  get(id: string) {
    return this.compilers.get(id) ?? null;
  }

  compile(id: string, document: BuilderDocument) {
    const compiler = this.get(id);
    if (!compiler) throw new Error(`Compiler not found: ${id}`);
    return compiler.compile(document);
  }

  list() {
    return [...this.compilers.values()];
  }
}
