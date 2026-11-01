
import React from "react";
import { Link } from "react-router-dom";

interface DashboardHeaderProps {
  onCreateProject?: () => void;
  title?: string;
}

export default function DashboardHeader({
  onCreateProject,
  title = "My Projects",
}: DashboardHeaderProps) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
        padding: "20px 0",
      }}
    >
      <div>
        <Link to="/" style={{ color: "#635bff", textDecoration: "none" }}>
          Visual Studio
        </Link>
        <h1>{title}</h1>
        <p>Manage and organize your website projects.</p>
      </div>

      <button type="button" onClick={onCreateProject}>
        + Create Project
      </button>
    </header>
  );
}
