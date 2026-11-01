
import React from "react";

interface ModalProps {
  open: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({
  open,
  title,
  children,
  onClose,
}: ModalProps) {
  React.useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 5000,
        display: "grid",
        placeItems: "center",
        background: "#0006",
        padding: 20,
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title || "Dialog"}
        style={{
          width: "min(600px, 100%)",
          maxHeight: "85vh",
          overflow: "auto",
          background: "#fff",
          padding: 24,
          borderRadius: 12,
        }}
      >
        <header style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>{title}</h2>
          <button type="button" onClick={onClose} aria-label="Close">×</button>
        </header>
        {children}
      </section>
    </div>
  );
}
