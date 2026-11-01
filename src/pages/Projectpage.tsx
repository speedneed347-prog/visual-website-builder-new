
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <main style={{ padding: 32 }}>
      <Link to="/dashboard">← Back to Dashboard</Link>
      <h1 style={{ marginTop: 28 }}>Project Details</h1>
      <p>
        Project ID: <strong>{projectId}</strong>
      </p>
      <Link
        to={`/editor/${encodeURIComponent(projectId ?? "new")}`}
        style={{ display: "inline-block", marginTop: 16, padding: "12px 20px", background: "#635bff", color: "#fff", borderRadius: 8, textDecoration: "none" }}
      >
        Open Editor
      </Link>
    </main>
  );
}
