import { createDocument, createDocumentNode } from "../document/documentFactory";
import { templateRegistry } from "./templateRegistry";

function createLandingTemplate() {
  const document = createDocument("Starter Landing Page");

  document.root.children = [
    createDocumentNode("section", {
      background: "#f8fafc",
      padding: 48
    }, [
      createDocumentNode("heading", {
        text: "Build Something Amazing",
        level: 1
      }),
      createDocumentNode("text", {
        text: "Create your website with a visual editor."
      }),
      createDocumentNode("button", {
        text: "Get Started",
        variant: "primary"
      })
    ]),
    createDocumentNode("section", {
      padding: 32
    }, [
      createDocumentNode("heading", {
        text: "Features",
        level: 2
      }),
      createDocumentNode("grid", {
        columns: 3,
        gap: 20
      }, [
        createDocumentNode("text", { text: "Easy to use" }),
        createDocumentNode("text", { text: "Responsive design" }),
        createDocumentNode("text", { text: "Export your website" })
      ])
    ])
  ];

  return document;
}

function createPortfolioTemplate() {
  const document = createDocument("Portfolio Website");

  document.root.children = [
    createDocumentNode("section", {
      padding: 48,
      background: "#111827",
      color: "#ffffff"
    }, [
      createDocumentNode("heading", {
        text: "Hello, I'm a Creator",
        level: 1
      }),
      createDocumentNode("text", {
        text: "Designer · Developer · Creator"
      })
    ]),
    createDocumentNode("section", { padding: 32 }, [
      createDocumentNode("heading", { text: "My Work", level: 2 }),
      createDocumentNode("grid", { columns: 2, gap: 16 }, [])
    ])
  ];

  return document;
}

export function registerStarterTemplates() {
  templateRegistry.register({
    id: "landing-basic",
    name: "Basic Landing Page",
    description: "A simple landing page starter",
    category: "business",
    create: createLandingTemplate
  });

  templateRegistry.register({
    id: "portfolio-basic",
    name: "Personal Portfolio",
    description: "A portfolio website starter",
    category: "portfolio",
    create: createPortfolioTemplate
  });
}

registerStarterTemplates();
