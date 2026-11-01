
import React from "react";

interface ManagedAsset {
  id: string;
  name: string;
  url: string;
  type: string;
  file?: File;
}

interface AssetManagerProps {
  assets?: ManagedAsset[];
  onAdd?: (files: File[]) => void;
  onRemove?: (id: string) => void;
}

export default function AssetManager({
  assets = [],
  onAdd,
  onRemove,
}: AssetManagerProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <section className="asset-manager">
      <h3>Asset Manager</h3>

      <button type="button" onClick={() => inputRef.current?.click()}>
        Add Assets
      </button>

      <input
        ref={inputRef}
        hidden
        multiple
        type="file"
        accept="image/*,video/*,audio/*"
        onChange={(event) => {
          if (event.target.files) {
            onAdd?.(Array.from(event.target.files));
          }
          event.target.value = "";
        }}
      />

      <ul>
        {assets.map((asset) => (
          <li key={asset.id}>
            <span>{asset.name}</span>
            <button
              type="button"
              onClick={() => onRemove?.(asset.id)}
              aria-label={`Remove ${asset.name}`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {assets.length === 0 && <p>No assets uploaded.</p>}
    </section>
  );
}
