
import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface TopToolbarProps {
  projectId: string;
}

export default function TopToolbar({ projectId }: TopToolbarProps) {
  const navigate = useNavigate();

  return (
    <header
      style={{
        height: 64,
        padding: "0 20px",
        background: "#fff",
        borderBottom: "1px solid #e5e5ee",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Link
          to="/dashboard"
          style={{ textDecoration: "none", color: "#635bff", fontWeight: 700 }}
        >
          ← Dashboard
        </Link>

        <span style={{ fontSize: 13, color: "#777" }}>
          Project: {projectId}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <button
          type="button"
          onClick={() => navigate(`/preview/${encodeURIComponent(projectId)}`)}
          style={{
            padding: "9px 15px",
            border: "1px solid #e5e5ee",
            borderRadius: 8,
            background: "#fff",
          }}
        >
          Preview
        </button>

        <button
          type="button"
          disabled
          title="Export will be enabled after the export system is implemented."
          style={{
            padding: "9px 15px",
            border: 0,
            borderRadius: 8,
            background: "#635bff",
            color: "#fff",
            opacity: 0.55,
            cursor: "not-allowed",
          }}
        >
          Export
        </button>
      </div>
    </header>
  );
}
