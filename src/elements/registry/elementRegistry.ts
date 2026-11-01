export type ElementDefinition = {
  type: string;
  label: string;
  category: string;
  description: string;
  acceptsChildren: boolean;
  defaultProps: Record<string, unknown>;
};

export const elementRegistry: Record<string, ElementDefinition> = {
  text: {
    type: "text", label: "Text", category: "basic",
    description: "Paragraph text", acceptsChildren: false,
    defaultProps: { text: "Edit this text", fontSize: 16 }
  },
  heading: {
    type: "heading", label: "Heading", category: "basic",
    description: "Page heading", acceptsChildren: false,
    defaultProps: { text: "Your heading", level: 2 }
  },
  image: {
    type: "image", label: "Image", category: "basic",
    description: "Image element", acceptsChildren: false,
    defaultProps: { src: "", alt: "Image" }
  },
  video: {
    type: "video", label: "Video", category: "basic",
    description: "Video player", acceptsChildren: false,
    defaultProps: { src: "", controls: true }
  },
  button: {
    type: "button", label: "Button", category: "basic",
    description: "Clickable button", acceptsChildren: false,
    defaultProps: { text: "Click me", variant: "primary" }
  },
  link: {
    type: "link", label: "Link", category: "basic",
    description: "Navigation link", acceptsChildren: false,
    defaultProps: { text: "Learn more", href: "#" }
  },
  icon: {
    type: "icon", label: "Icon", category: "basic",
    description: "Decorative icon", acceptsChildren: false,
    defaultProps: { name: "star" }
  },
  divider: {
    type: "divider", label: "Divider", category: "basic",
    description: "Horizontal separator", acceptsChildren: false,
    defaultProps: { thickness: 1, color: "#e5e7eb" }
  },
  section: {
    type: "section", label: "Section", category: "layout",
    description: "Full-width page section", acceptsChildren: true,
    defaultProps: { minHeight: 120 }
  },
  container: {
    type: "container", label: "Container", category: "layout",
    description: "Content container", acceptsChildren: true,
    defaultProps: { maxWidth: 1200 }
  },
  flex: {
    type: "flex", label: "Flex", category: "layout",
    description: "Flexbox layout", acceptsChildren: true,
    defaultProps: { direction: "row", gap: 16 }
  },
  grid: {
    type: "grid", label: "Grid", category: "layout",
    description: "CSS grid layout", acceptsChildren: true,
    defaultProps: { columns: 2, gap: 16 }
  },
  row: {
    type: "row", label: "Row", category: "layout",
    description: "Horizontal layout", acceptsChildren: true,
    defaultProps: { gap: 12 }
  },
  column: {
    type: "column", label: "Column", category: "layout",
    description: "Vertical layout", acceptsChildren: true,
    defaultProps: { gap: 12 }
  },
  stack: {
    type: "stack", label: "Stack", category: "layout",
    description: "Stacked layout", acceptsChildren: true,
    defaultProps: { gap: 12 }
  },
  spacer: {
    type: "spacer", label: "Spacer", category: "layout",
    description: "Empty spacing element", acceptsChildren: false,
    defaultProps: { height: 32 }
  }
};

export function getElementDefinition(type: string) {
  return elementRegistry[type] ?? null;
}

export function getAllElementDefinitions() {
  return Object.values(elementRegistry);
}
