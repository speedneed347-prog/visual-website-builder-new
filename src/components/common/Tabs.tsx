
import React from "react";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  items: TabItem[];
  defaultActive?: string;
  onChange?: (id: string) => void;
}

export default function Tabs({
  items,
  defaultActive,
  onChange,
}: TabsProps) {
  const [active, setActive] = React.useState(
    defaultActive ?? items[0]?.id ?? ""
  );

  function selectTab(id: string) {
    setActive(id);
    onChange?.(id);
  }

  const current = items.find((item) => item.id === active);

  return (
    <div className="tabs">
      <div role="tablist" style={{ display: "flex", gap: 6 }}>
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active === item.id}
            disabled={item.disabled}
            onClick={() => selectTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" style={{ padding: 12 }}>
        {current?.content}
      </div>
    </div>
  );
}
