
import React from "react";

const shortcuts = [
  ["Ctrl / Cmd + Z", "Undo"],
  ["Ctrl / Cmd + Shift + Z", "Redo"],
  ["Ctrl / Cmd + S", "Save"],
  ["Ctrl / Cmd + D", "Duplicate"],
  ["Delete", "Delete selected element"],
  ["Ctrl / Cmd + A", "Select all"],
  ["Escape", "Clear selection"],
];

interface KeyboardShortcutsProps {
  open: boolean;
  onClose: () => void;
}

export default function KeyboardShortcuts({
  open,
  onClose,
}: KeyboardShortcutsProps) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="shortcuts-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 5000,
        display: "grid",
        placeItems: "center",
        background: "#0006",
      }}
    >
      <div style={{ background: "#fff", padding: 24, borderRadius: 12, width: "min(450px, 90vw)" }}>
        <header style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 id="shortcuts-title">Keyboard Shortcuts</h2>
          <button onClick={onClose} aria-label="Close">×</button>
        </header>

        {shortcuts.map(([key, action]) => (
          <div
            key={key}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <span>{action}</span>
            <kbd>{key}</kbd>
          </div>
        ))}
      </div>
    </div>
  );
}
