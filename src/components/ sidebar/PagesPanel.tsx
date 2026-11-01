
import React from "react";

export interface WebsitePage {
  id: string;
  name: string;
  path: string;
}

interface PagesPanelProps {
  pages?: WebsitePage[];
  activePageId?: string;
  onSelectPage?: (id: string) => void;
  onAddPage?: () => void;
}

export default function PagesPanel({
  pages = [{ id: "home", name: "Home", path: "/" }],
  activePageId = "home",
  onSelectPage,
  onAddPage,
}: PagesPanelProps) {
  return (
    <div className="pages-panel">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Pages</h3>
        <button type="button" onClick={onAddPage} aria-label="Add page">
          +
        </button>
      </div>

      {pages.map((page) => (
        <button
          key={page.id}
          type="button"
          onClick={() => onSelectPage?.(page.id)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            padding: 10,
            marginBottom: 5,
            border: "1px solid #e5e5ee",
            borderRadius: 7,
            background: activePageId === page.id ? "#635bff12" : "#fff",
          }}
        >
          <strong>{page.name}</strong>
          <small style={{ color: "#777" }}>{page.path}</small>
        </button>
      ))}
    </div>
  );
}
