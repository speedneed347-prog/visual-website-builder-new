
import React from "react";

interface PreviewPanelProps {
  html?: string;
  title?: string;
}

export default function PreviewPanel({
  html = "",
  title = "Website Preview",
}: PreviewPanelProps) {
  const frameRef = React.useRef<HTMLIFrameElement>(null);

  return (
    <section className="preview-panel">
      <h3>{title}</h3>

      <iframe
        ref={frameRef}
        title={title}
        sandbox="allow-scripts"
        srcDoc={html || "<!doctype html><html><body><h1>Preview</h1></body></html>"}
        style={{
          width: "100%",
          minHeight: 500,
          border: "1px solid #ddd",
          borderRadius: 8,
          background: "#fff",
        }}
      />
    </section>
  );
}
