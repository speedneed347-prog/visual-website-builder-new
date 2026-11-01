function escapeString(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

export function generateReactComponent(title: string, jsx: string) {
  return `import React from "react";

export default function App() {
  return (
    <main>
      ${jsx}
    </main>
  );
}
`;
}
