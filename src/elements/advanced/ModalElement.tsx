import type { ReactNode } from "react";

type Props = {
  open?: boolean;
  title?: string;
  children?: ReactNode;
  onClose?: () => void;
  closeOnBackdrop?: boolean;
};

export default function ModalElement({
  open = false,
  title = "Dialog",
  children,
  onClose,
  closeOnBackdrop = true
}: Props) {
  if (!open) return null;

  return (
    <div
      role="presentation"
      onMouseDown={(event) => {
        if (closeOnBackdrop && event.target === event.currentTarget) {
          onClose?.();
        }
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "grid",
        placeItems: "center",
        padding: 20,
        background: "rgba(15, 23, 42, 0.55)"
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title}
        style={{
          width: "min(100%, 560px)",
          maxHeight: "85vh",
          overflow: "auto",
          padding: 24,
          borderRadius: 12,
          background: "#fff",
          boxShadow: "0 20px 60px rgba(0,0,0,.2)"
        }}
      >
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16
        }}>
          <h2 style={{ margin: 0 }}>{title}</h2>
          <button type="button" onClick={onClose} aria-label="Close dialog">
            ×
          </button>
        </header>
        <div style={{ marginTop: 16 }}>{children}</div>
      </section>
    </div>
  );
}
