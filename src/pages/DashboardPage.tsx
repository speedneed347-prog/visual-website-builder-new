
import React from "react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <main style={{ padding: 32 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div>
          <h1>My Projects</h1>
          <p style={{ color: "#777" }}>Manage your website projects.</p>
        </div>
        <Link
          to="/editor/new"
          style={{ background: "#635bff", color: "#fff", padding: "12px 18px", borderRadius: 8, textDecoration: "none" }}
        >
          + Create Website
        </Link>
      </header>

      <section style={{ marginTop: 35, padding: 28, background: "#fff", border: "1px solid #e5e5ee", borderRadius: 12 }}>
        <h2>Welcome to your workspace</h2>
        <p style={{ color: "#777" }}>
          Your projects will appear here when project storage is implemented.
        </p>
        <Link to="/templates">Explore Templates</Link>
      </section>
    </main>
  );
}
