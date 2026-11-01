
import React from "react";

type PanelTab = "console" | "code" | "history";

export default function BottomPanel() {
  const [activeTab, setActiveTab] = React.useState<PanelTab>("console");

  return (
    <section className="bottom-panel">
      <nav className="bottom-panel-tabs">
        <button onClick={() => setActiveTab("console")}>Console</button>
        <button onClick={() => setActiveTab("code")}>Code</button>
        <button onClick={() => setActiveTab("history")}>History</button>
      </nav>

      <div className="bottom-panel-content">
        {activeTab === "console" && <p>No messages.</p>}
        {activeTab === "code" && <p>Generated code will appear here.</p>}
        {activeTab === "history" && <p>Project history will appear here.</p>}
      </div>
    </section>
  );
}
