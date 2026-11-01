
import React from "react";

export default function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <header className="sidebar-heading">
        <h3>Properties</h3>
      </header>

      <section className="property-section">
        <h4>Selection</h4>
        <p>Select an element on the canvas to edit its properties.</p>
      </section>

      <section className="property-section">
        <h4>Position</h4>
        <p>Position controls will appear here.</p>
      </section>

      <section className="property-section">
        <h4>Appearance</h4>
        <p>Typography, colors, borders and effects will appear here.</p>
      </section>
    </aside>
  );
}
