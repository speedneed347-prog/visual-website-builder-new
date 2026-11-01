
import React from "react";
import LayoutTab from "./LayoutTab";
import StyleTab from "./StyleTab";
import TypographyTab from "./TypographyTab";
import SpacingTab from "./SpacingTab";
import EffectsTab from "./EffectsTab";
import AdvancedTab from "./AdvancedTab";
import ResponsiveTab from "./ResponsiveTab";

const tabs = [
  "Layout",
  "Style",
  "Typography",
  "Spacing",
  "Effects",
  "Advanced",
  "Responsive",
] as const;

type Tab = (typeof tabs)[number];

interface PropertiesPanelProps {
  selectedElement?: {
    id: string;
    type: string;
  } | null;
}

export default function PropertiesPanel({
  selectedElement = null,
}: PropertiesPanelProps) {
  const [activeTab, setActiveTab] = React.useState<Tab>("Layout");

  const panels: Record<Tab, React.ReactNode> = {
    Layout: <LayoutTab />,
    Style: <StyleTab />,
    Typography: <TypographyTab />,
    Spacing: <SpacingTab />,
    Effects: <EffectsTab />,
    Advanced: <AdvancedTab />,
    Responsive: <ResponsiveTab />,
  };

  return (
    <aside className="properties-panel">
      <header>
        <h3>Properties</h3>
        {selectedElement && (
          <small>{selectedElement.type} · {selectedElement.id}</small>
        )}
      </header>

      {!selectedElement ? (
        <p>Select an element to edit its properties.</p>
      ) : (
        <>
          <nav className="properties-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
              >
                {tab}
              </button>
            ))}
          </nav>

          <div className="properties-tab-content">
            {panels[activeTab]}
          </div>
        </>
      )}
    </aside>
  );
}
