
import React from "react";

export interface BuilderAsset {
  id: string;
  name: string;
  url: string;
  type: string;
}

interface AssetsPanelProps {
  assets?: BuilderAsset[];
  onUpload?: (files: FileList) => void;
  onInsert?: (asset: BuilderAsset) => void;
}

export default function AssetsPanel({
  assets = [],
  onUpload,
  onInsert,
}: AssetsPanelProps) {
  const fileInput = React.useRef<HTMLInputElement>(null);

  return (
    <div className="assets-panel">
      <h3>Assets</h3>

      <button
        type="button"
        onClick={() => fileInput.current?.click()}
      >
        Upload Files
      </button>

      <input
        ref={fileInput}
        type="file"
        accept="image/*,video/*,audio/*"
        multiple
        hidden
        onChange={(event) => {
          const files = event.target.files;
          if (files?.length) onUpload?.(files);
          event.target.value = "";
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 10,
          marginTop: 16,
        }}
      >
        {assets.map((asset) => (
          <button
            key={asset.id}
            type="button"
            onClick={() => onInsert?.(asset)}
            title={asset.name}
            style={{
              minWidth: 0,
              padding: 6,
              background: "#fff",
              border: "1px solid #e5e5ee",
              borderRadius: 7,
            }}
          >
            {asset.type.startsWith("image/") ? (
              <img
                src={asset.url}
                alt={asset.name}
                style={{
                  width: "100%",
                  height: 65,
                  objectFit: "cover",
                }}
              />
            ) : (
              <span>{asset.name}</span>
            )}
          </button>
        ))}
      </div>

      {assets.length === 0 && (
        <p style={{ color: "#777", fontSize: 13 }}>
          Uploaded assets will appear here.
        </p>
      )}
    </div>
  );
}
