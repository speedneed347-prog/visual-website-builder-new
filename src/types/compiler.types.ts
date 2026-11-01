export type CompilerTarget = "html" | "react";

export type GeneratedFile = {
  path: string;
  content: string;
};

export type CompilerDiagnostic = {
  severity: "error" | "warning" | "info";
  message: string;
  file?: string;
  line?: number;
};

export type CompilerOutput = {
  files: GeneratedFile[];
  diagnostics: CompilerDiagnostic[];
};
