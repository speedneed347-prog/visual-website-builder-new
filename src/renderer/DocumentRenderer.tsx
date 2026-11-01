import type { CSSProperties } from "react";
import type { BuilderDocument } from "../document/documentFactory";
import ElementRenderer from "./ElementRenderer";

type Props = {
  document: BuilderDocument;
  selectedId?: string | null;
  onSelect?: (id: string) => void;
  className?: string;
  style?: CSSProperties;
};

export default function DocumentRenderer({
  document,
  selectedId,
  onSelect,
  className,
  style
}: Props) {
  return (
    <main
      className={className}
      data-document-id={document.id}
      style={{
        minHeight: "100%",
        width: "100%",
        background: "#fff",
        ...style
      }}
    >
      <ElementRenderer
        node={document.root}
        selectedId={selectedId}
        onSelect={onSelect}
      />
    </main>
  );
}
