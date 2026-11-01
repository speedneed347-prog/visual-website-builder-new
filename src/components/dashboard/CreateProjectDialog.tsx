
import React from "react";

interface CreateProjectDialogProps {
  open: boolean;
  onClose: () => void;
  onCreate: (name: string) => void;
}

export default function CreateProjectDialog({
  open,
  onClose,
  onCreate,
}: CreateProjectDialogProps) {
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    if (open) setName("");
  }, [open]);

  if (!open) return null;

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onCreate(trimmed);
    onClose();
  }

  return (
    <div
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 4000,
        display: "grid",
        placeItems: "center",
        background: "#0006",
      }}
    >
      <form
        role="dialog"
        aria-modal="true"
        onSubmit={submit}
        style={{ background: "#fff", padding: 24, borderRadius: 12, width: "min(420px, 90vw)" }}
      >
        <h2>Create Project</h2>

        <label>
          Project Name
          <input
            autoFocus
            required
            maxLength={80}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 20 }}>
          <button type="button" onClick={onClose}>Cancel</button>
          <button type="submit" disabled={!name.trim()}>Create</button>
        </div>
      </form>
    </div>
  );
}
