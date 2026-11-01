
import React from "react";

interface EditorStatusBarProps {
  zoom?: number;
  selectedCount?: number;
  isSaving?: boolean;
}

export default function EditorStatusBar({
  zoom = 100,
  selectedCount = 0,
  isSaving = false,
}: EditorStatusBarProps) {
  return (
    <footer className="editor-status-bar">
      <span>{selectedCount} selected</span>
      <span>{zoom}% Zoom</span>
      <span>{isSaving ? "Saving..." : "Ready"}</span>
    </footer>
  );
}
