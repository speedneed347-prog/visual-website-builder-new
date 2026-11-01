import type { BuilderDocument } from "../../document/documentFactory";
import { generateJsx } from "./jsxGenerator";
import { generateReactComponent } from "./componentGenerator";
import { generateReactRuntime } from "./reactRuntimeGenerator";

export function compileReact(document: BuilderDocument): Record<string, string> {
  const jsx = generateJsx(document.root);
  const component = generateReactComponent(
    String(document.metadata.title ?? document.name),
    jsx
  );

  return {
    "package.json": JSON.stringify({
      name: "exported-website",
      private: true,
      version: "1.0.0",
      type: "module",
      scripts: {
        dev: "vite",
        build: "tsc -b && vite build",
        preview: "vite preview"
      },
      dependencies: {
        react: "^19.0.0",
        "react-dom": "^19.0.0"
      },
      devDependencies: {
        "@vitejs/plugin-react": "^4.3.0",
        typescript: "^5.7.0",
        vite: "^6.0.0"
      }
    }, null, 2),
    "src/App.tsx": component,
    "src/main.tsx": generateReactRuntime(),
    "src/index.css": "body{margin:0;font-family:Arial,sans-serif}*{box-sizing:border-box}img,video{max-width:100%}",
    "index.html": "<!doctype html><html><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\"><title>Exported Website</title></head><body><div id=\"root\"></div><script type=\"module\" src=\"/src/main.tsx\"></script></body></html>"
  };
}
