
import React from "react";

export interface LayerItem {
  id: string;
  name: string;
  children?: LayerItem[];
}

interface LayersPanelProps {
  layers?: LayerItem[];
  selectedId?: string | null;
  onSelect?: (id: string) => void;
}

export default function LayersPanel({
  layers = [],
  selectedId,
  onSelect,
}: LayersPanelProps) {
  const renderLayers = (items: LayerItem[], depth = 0) =>
    items.map((layer) => (
      <React.Fragment key={layer.id}>
        <button
          type="button"
          onClick={() => onSelect?.(layer.id)}
          style={{
            display: "block",
            width: "100%",
            textAlign: "left",
            padding: "8px 10px",
            paddingLeft: 10 + depth * 16,
            border: 0,
            borderRadius: 5,
            background: selectedId === layer.id ? "#635bff18" : "transparent",
            color: selectedId === layer.id ? "#635bff" : "inherit",
          }}
        >
          {layer.name}
        </button>

        {layer.children?.length
          ? renderLayers(layer.children, depth + 1)
          : null}
      </React.Fragment>
    ));

  return (
    <div className="layers-panel">
      <h3>Layers</h3>
      {layers.length ? (
        renderLayers(layers)
      ) : (
        <p style={{ color: "#777", fontSize: 13 }}>No layers yet.</p>
      )}
    </div>
  );
}
