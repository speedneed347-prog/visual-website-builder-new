import type { BuilderDocument } from "../document/documentFactory";
import DocumentRenderer from "./DocumentRenderer";

type Props = {
  document: BuilderDocument;
};

export default function PreviewRenderer({ document }: Props) {
  return (
    <div style={{
      minHeight: "100vh",
      width: "100%",
      background: "#fff",
      color: "#111827"
    }}>
      <DocumentRenderer document={document} />
    </div>
  );
}
