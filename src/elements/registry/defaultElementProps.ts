export const defaultElementProps: Record<string, Record<string, unknown>> = {
  text: { text: "Edit this text", fontSize: 16, color: "#222222" },
  heading: { text: "Your heading", level: 2, fontSize: 32 },
  image: { src: "", alt: "Image", objectFit: "cover" },
  video: { src: "", controls: true, muted: false },
  button: { text: "Click me", variant: "primary", href: "#" },
  link: { text: "Learn more", href: "#" },
  icon: { name: "star", size: 24 },
  divider: { thickness: 1, color: "#e5e7eb" },
  section: { minHeight: 120, padding: 24 },
  container: { maxWidth: 1200, padding: 16 },
  flex: { direction: "row", gap: 16, alignItems: "center" },
  grid: { columns: 2, gap: 16 },
  row: { gap: 12 },
  column: { gap: 12 },
  stack: { gap: 12 },
  spacer: { height: 32 }
};

export function getDefaultProps(type: string) {
  return { ...(defaultElementProps[type] ?? {}) };
}
