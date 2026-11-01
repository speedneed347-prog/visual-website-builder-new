
import React from "react";
import TopToolbar from "./TopToolbar";

interface EditorLayoutProps {
  projectId: string;
}

export default function EditorLayout({ projectId }: EditorLayoutProps) {
  return (
    <div className="editor-layout">
      <TopToolbar projectId={projectId} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "230px minmax(0, 1fr) 260px",
          minHeight: "calc(100vh - 64px)",
          background: "#f1f1f7",
        }}
      >
        <aside style={{ background: "#fff", padding: 20, borderRight: "1px solid #e5e5ee" }}>
          <h3>Elements</h3>
          <p style={{ color: "#777", fontSize: 13 }}>
            Available design elements will appear here.
          </p>
        </aside>

        <main style={{ padding: 20, minWidth: 0 }}>
          <div style={{ marginBottom: 16, fontSize: 13 }}>
            Project: {projectId}
          </div>

          <div
            style={{
              minHeight: 650,
              background: "#fff",
              border: "1px solid #e5e5ee",
              borderRadius: 8,
              display: "grid",
              placeItems: "center",
              textAlign: "center",
            }}
          >
            <div>
              <h1>Website Canvas</h1>
              <p style={{ color: "#777" }}>
                Your website design workspace.
              </p>
            </div>
          </div>
        </main>

        <aside style={{ background: "#fff", padding: 20, borderLeft: "1px solid #e5e5ee" }}>
          <h3>Properties</h3>
          <p style={{ color: "#777", fontSize: 13 }}>
            Select an element to inspect its properties.
          </p>
        </aside>
      </div>
    </div>
  );
}
