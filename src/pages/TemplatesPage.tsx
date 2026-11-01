
import React from "react";
import { Link } from "react-router-dom";

const templates = [
  { id: "business", name: "Business Website", description: "A layout for business websites." },
  { id: "portfolio", name: "Portfolio", description: "A personal portfolio layout." },
  { id: "landing", name: "Landing Page", description: "A simple landing page layout." },
];

export default function TemplatesPage() {
  return (
    <main style={{ padding: 32 }}>
      <Link to="/dashboard">← Dashboard</Link>
      <h1 style={{ marginTop: 24 }}>Website Templates</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginTop: 24 }}>
        {templates.map((template) => (
          <article key={template.id} style={{ padding: 22, background: "#fff", border: "1px solid #e5e5ee", borderRadius: 12 }}>
            <h2>{template.name}</h2>
            <p style={{ color: "#777" }}>{template.description}</p>
            <Link to={`/editor/template-${template.id}`}>
              Open in Editor →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
