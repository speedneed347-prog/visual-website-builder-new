
import React from "react";
import ElementsPanel from "../sidebar/ElementsPanel";
import LayersPanel from "../sidebar/LayersPanel";
import PagesPanel from "../sidebar/PagesPanel";
import ComponentsPanel from "../sidebar/ComponentsPanel";
import AssetsPanel from "../sidebar/AssetsPanel";

export default function LeftSidebar() {
  const [activeTab, setActiveTab] = React.useState("elements");

  const tabs = [
    { id: "elements", label: "Elements" },
    { id: "layers", label: "Layers" },
    { id: "pages", label: "Pages" },
    { id: "components", label: "Components" },
    { id: "assets", label: "Assets" },
  ];

  return (
    <aside className="left-sidebar">
      <nav className="sidebar-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            aria-pressed={activeTab === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-content">
        {activeTab === "elements" && <ElementsPanel />}
        {activeTab === "layers" && <LayersPanel />}
        {activeTab === "pages" && <PagesPanel />}
        {activeTab === "components" && <ComponentsPanel />}
        {activeTab === "assets" && <AssetsPanel />}
      </div>
    </aside>
  );
}
