import type { ReactNode } from "react";

type Props = {
  title?: string;
  children?: ReactNode;
  defaultOpen?: boolean;
};

export default function AccordionElement({
  title = "Accordion item", children, defaultOpen = false
}: Props) {
  return (
    <details open={defaultOpen}
      style={{ border: "1px solid #e5e7eb", borderRadius: 8, padding: 12 }}>
      <summary style={{ cursor: "pointer", fontWeight: 600 }}>{title}</summary>
      <div style={{ paddingTop: 12 }}>{children}</div>
    </details>
  );
}
