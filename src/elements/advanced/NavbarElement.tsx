import type { CSSProperties } from "react";

type NavItem = { label: string; href: string };

type Props = {
  brand?: string;
  items?: NavItem[];
  style?: CSSProperties;
};

export default function NavbarElement({
  brand = "Brand", items = [], style
}: Props) {
  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 20, padding: "14px 20px", background: "#fff",
      borderBottom: "1px solid #e5e7eb", ...style
    }}>
      <strong>{brand}</strong>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {items.map((item) => (
          <a key={`${item.label}-${item.href}`} href={item.href}
            style={{ color: "inherit", textDecoration: "none" }}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
