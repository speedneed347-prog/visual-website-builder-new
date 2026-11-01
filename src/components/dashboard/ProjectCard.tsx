
import React from "react";
import { Link } from "react-router-dom";

export interface ProjectCardData {
  id: string;
  name: string;
  description?: string;
  updatedAt?: string;
  thumbnail?: string;
}

interface ProjectCardProps {
  project: ProjectCardData;
  onDelete?: (id: string) => void;
  onDuplicate?: (id: string) => void;
}

export default function ProjectCard({
  project,
  onDelete,
  onDuplicate,
}: ProjectCardProps) {
  return (
    <article
      style={{
        background: "#fff",
        border: "1px solid #e5e5ee",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <div style={{ height: 140, background: "#f0efff" }}>
        {project.thumbnail && (
          <img
            src={project.thumbnail}
            alt={`${project.name} preview`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </div>

      <div style={{ padding: 16 }}>
        <h3>{project.name}</h3>
        <p>{project.description || "Website project"}</p>
        <small>{project.updatedAt || "Recently created"}</small>

        <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
          <Link to={`/editor/${encodeURIComponent(project.id)}`}>
            Open
          </Link>
          <button onClick={() => onDuplicate?.(project.id)}>Duplicate</button>
          <button onClick={() => onDelete?.(project.id)}>Delete</button>
        </div>
      </div>
    </article>
  );
}
