
import React from "react";

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <img src="/logo.svg" alt="Website Builder" />
          <span>Visual Studio</span>
        </div>

        <div className="header-actions">
          <button className="header-button" type="button">
            Preview
          </button>

          <button className="publish-button" type="button">
            Export
          </button>
        </div>
      </header>

      <main className="workspace">
        <aside className="sidebar">
          <h2>Elements</h2>
          <p>Design elements will appear here.</p>
        </aside>

        <section className="canvas-area">
          <div className="canvas-toolbar">
            <span>Untitled Website</span>
            <span className="canvas-status">Design Mode</span>
          </div>

          <div className="canvas">
            <div className="canvas-welcome">
              <h1>Your Website Starts Here</h1>
              <p>
                Build your website visually using the editor.
              </p>
            </div>
          </div>
        </section>

        <aside className="properties-panel">
          <h2>Properties</h2>
          <p>Select an element to edit its properties.</p>
        </aside>
      </main>
    </div>
  );
}

export default App;
