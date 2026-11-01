export type CodeIssue = {
  line: number;
  message: string;
  severity: "error" | "warning";
};

export function validateGeneratedCode(source: string): CodeIssue[] {
  const issues: CodeIssue[] = [];
  const lines = source.split(/\r?\n/);

  lines.forEach((line, index) => {
    if (line.includes("undefined")) {
      issues.push({
        line: index + 1,
        message: "Generated code contains the word undefined",
        severity: "warning"
      });
    }

    if (/\bTODO\b/.test(line)) {
      issues.push({
        line: index + 1,
        message: "Generated code contains a TODO marker",
        severity: "warning"
      });
    }
  });

  return issues;
}
