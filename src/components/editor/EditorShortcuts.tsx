
import React from "react";

interface EditorShortcutsProps {
  onUndo?: () => void;
  onRedo?: () => void;
  onSave?: () => void;
  onDelete?: () => void;
}

export default function EditorShortcuts({
  onUndo,
  onRedo,
  onSave,
  onDelete,
}: EditorShortcutsProps) {
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;

      if (
        target?.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(target?.tagName ?? "")
      ) {
        return;
      }

      const modifier = event.ctrlKey || event.metaKey;

      if (modifier && event.key.toLowerCase() === "z") {
        event.preventDefault();
        if (event.shiftKey) onRedo?.();
        else onUndo?.();
      }

      if (modifier && event.key.toLowerCase() === "y") {
        event.preventDefault();
        onRedo?.();
      }

      if (modifier && event.key.toLowerCase() === "s") {
        event.preventDefault();
        onSave?.();
      }

      if (
        (event.key === "Delete" || event.key === "Backspace") &&
        !event.repeat
      ) {
        onDelete?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onUndo, onRedo, onSave, onDelete]);

  return null;
}
