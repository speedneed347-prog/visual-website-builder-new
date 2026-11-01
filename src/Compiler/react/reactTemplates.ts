export const reactTemplates = {
  app: `import React from "react";

export default function App() {
  return <main />;
}
`,
  main: `import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")!).render(<App />);
`,
  css: `* { box-sizing: border-box; }
html, body, #root { min-height: 100%; margin: 0; }
`
};
