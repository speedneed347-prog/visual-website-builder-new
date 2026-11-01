import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  emptyText?: string;
};

export default function ElementContent({
  children,
  emptyText = "Add content"
}: Props) {
  const isEmpty = children === null || children === undefined || children === false;

  return (
    <div style={{ minWidth: 0, minHeight: 0 }}>
      {isEmpty ? (
        <div style={{
          minHeight: 40,
          display: "grid",
          placeItems: "center",
          color: "#94a3b8",
          border: "1px dashed #cbd5e1",
          borderRadius: 6
        }}>
          {emptyText}
        </div>
      ) : children}
    </div>
  );
}
