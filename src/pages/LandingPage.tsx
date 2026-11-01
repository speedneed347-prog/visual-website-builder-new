
import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#fff" }}>
      <nav style={{ padding: "20px 5%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <strong style={{ fontSize: 22, color: "#635bff" }}>Visual Studio</strong>
        <Link to="/dashboard" style={{ textDecoration: "none", background: "#635bff", color: "#fff", padding: "11px 20px", borderRadius: 8 }}>
          Open Builder
        </Link>
      </nav>

      <section style={{ maxWidth: 900, margin: "auto", padding: "110px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", marginBottom: 20 }}>
          Build Websites Visually.
        </h1>
        <p style={{ color: "#777", fontSize: 18, lineHeight: 1.7 }}>
          Design and build responsive websites using a visual editor.
          No manual coding required for everyday design tasks.
        </p>
        <Link to="/dashboard" style={{ display: "inline-block", marginTop: 24, padding: "14px 28px", background: "#635bff", color: "#fff", borderRadius: 9, textDecoration: "none" }}>
          Start Building
        </Link>
      </section>
    </main>
  );
}
