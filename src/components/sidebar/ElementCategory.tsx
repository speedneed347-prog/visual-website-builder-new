
import React from "react";

interface ElementCategoryProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function ElementCategory({
  title,
  children,
  defaultOpen = true,
}: ElementCategoryProps) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <section className="element-category">
      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "10px 8px",
          border: 0,
          background: "transparent",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="element-category-content">
          {children}
        </div>
      )}
    </section>
  );
}
