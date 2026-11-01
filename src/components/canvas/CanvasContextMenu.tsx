
import React from "react";

interface CanvasContextMenuProps {
  x: number;
  y: number;
  visible: boolean;
  onDuplicate?: () => void;
  onDelete?: () => void;
  onClose?: () => void;
}

export default function CanvasContextMenu({
  x,
  y,
  visible,
  onDuplicate,
  onDelete,
  onClose,
}: CanvasContextMenuProps) {
  if (!visible) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2999,
        }}
      />

      <div
        role="menu"
        style={{
          position: "fixed",
          left: x,
          top: y,
          zIndex: 3000,
          minWidth: 160,
          padding: 6,
          background: "#fff",
          border: "1px solid #e5e5ee",
          borderRadius: 8,
          boxShadow: "0 5px 20px #0002",
        }}
      >
        <button role="menuitem" onClick={() => { onDuplicate?.(); onClose?.(); }}>
          Duplicate
        </button>
        <button role="menuitem" onClick={() => { onDelete?.(); onClose?.(); }}>
          Delete
        </button>
      </div>
    </>
  );
}
