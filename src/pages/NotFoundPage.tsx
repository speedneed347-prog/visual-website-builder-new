
import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", textAlign: "center", padding: 24 }}>
      <div>
        <h1 style={{ fontSize: 72, margin: 0, color: "#635bff" }}>404</h1>
        <h2>Page Not Found</h2>
        <p style={{ color: "#777" }}>
          The page you are looking for does not exist.
        </p>
        <Link to="/" style={{ display: "inline-block", marginTop: 16, padding: "12px 22px", background: "#635bff", color: "#fff", borderRadius: 8, textDecoration: "none" }}>
          Go Home
        </Link>
      </div>
    </main>
  );
}
