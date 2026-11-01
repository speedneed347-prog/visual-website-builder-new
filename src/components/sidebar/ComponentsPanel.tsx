
import React from "react";

export interface SavedComponent {
  id: string;
  name: string;
  description?: string;
}

interface ComponentsPanelProps {
  components?: SavedComponent[];
  onInsert?: (id: string) => void;
}

export default function ComponentsPanel({
  components = [],
  onInsert,
}: ComponentsPanelProps) {
  return (
    <div className="components-panel">
      <h3>Saved Components</h3>

      {components.length === 0 ? (
        <p style={{ color: "#777", fontSize: 13 }}>
          No saved components yet. Save reusable designs to access them here.
        </p>
      ) : (
        components.map((component) => (
          <button
            key={component.id}
            type="button"
            onClick={() => onInsert?.(component.id)}
            style={{
              display: "block",
              width: "100%",
              padding: 12,
              marginBottom: 8,
              textAlign: "left",
              background: "#fff",
              border: "1px solid #e5e5ee",
              borderRadius: 8,
            }}
          >
            <strong>{component.name}</strong>
            {component.description && (
              <small style={{ display: "block", color: "#777" }}>
                {component.description}
              </small>
            )}
          </button>
        ))
      )}
    </div>
  );
}
