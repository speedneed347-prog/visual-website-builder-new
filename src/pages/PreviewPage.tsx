

import React from "react";
import { Link, useParams } from "react-router-dom";

export default function PreviewPage() {
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <main style={{ minHeight: "100vh", background: "#f5f5fa" }}>
      <header style={{ padding: 16, background: "#fff", borderBottom: "1px solid #e5e5ee" }}>
        <Link to={`/editor/${projectId}`}>← Back to Editor</Link>
        <span style={{ marginLeft: 20, color: "#777" }}>Preview</span>
      </header>

      <section style={{ margin: 24, minHeight: "80vh", background: "#fff", border: "1px solid #e5e5ee", borderRadius: 8, display: "grid", placeItems: "center" }}>
        <div style={{ textAlign: "center", padding: 20 }}>
          <h1>Website Preview</h1>
          <p style={{ color: "#777" }}>
            Project: {projectId}
          </p>
          <p style={{ color: "#777" }}>
            The live document preview will be connected to the project renderer.
          </p>
        </div>
      </section>
    </main>
  );
}
