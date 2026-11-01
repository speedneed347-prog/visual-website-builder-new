
import React from "react";
import { Link } from "react-router-dom";

export default function SettingsPage() {
  return (
    <main style={{ padding: 32, maxWidth: 800 }}>
      <Link to="/dashboard">← Dashboard</Link>
      <h1 style={{ marginTop: 24 }}>Settings</h1>

      <section style={{ marginTop: 24, padding: 24, background: "#fff", border: "1px solid #e5e5ee", borderRadius: 12 }}>
        <h2>Workspace Settings</h2>
        <p style={{ color: "#777" }}>
          Workspace preferences and account configuration will be managed here.
        </p>
      </section>

      <section style={{ marginTop: 18, padding: 24, background: "#fff", border: "1px solid #e5e5ee", borderRadius: 12 }}>
        <h2>Storage</h2>
        <p style={{ color: "#777" }}>
          Local project storage will be configured in a later implementation stage.
        </p>
      </section>
    </main>
  );
}
