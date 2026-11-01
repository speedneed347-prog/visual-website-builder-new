import { useState } from "react";
import type { ReactNode } from "react";

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

type Props = {
  tabs?: Tab[];
  initialTab?: string;
};

export default function TabsElement({ tabs = [], initialTab }: Props) {
  const [activeTab, setActiveTab] = useState(
    initialTab ?? tabs[0]?.id ?? ""
  );

  const active = tabs.find((tab) => tab.id === activeTab);

  return (
    <div>
      <div role="tablist" style={{
        display: "flex", gap: 8, borderBottom: "1px solid #e5e7eb"
      }}>
        {tabs.map((tab) => (
          <button key={tab.id} type="button" role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "10px 14px", border: 0, cursor: "pointer",
              background: "transparent",
              borderBottom: activeTab === tab.id ? "2px solid #635bff" : "2px solid transparent"
            }}>
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" style={{ padding: 14 }}>
        {active?.content ?? null}
      </div>
    </div>
  );
}
