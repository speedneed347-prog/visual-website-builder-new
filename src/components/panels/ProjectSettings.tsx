
import React from "react";

export interface ProjectSettingsData {
  name: string;
  description: string;
  width: number;
  height: number;
  backgroundColor: string;
}

interface ProjectSettingsProps {
  settings: ProjectSettingsData;
  onChange: (settings: ProjectSettingsData) => void;
}

export default function ProjectSettings({
  settings,
  onChange,
}: ProjectSettingsProps) {
  function update<K extends keyof ProjectSettingsData>(
    key: K,
    value: ProjectSettingsData[K]
  ) {
    onChange({ ...settings, [key]: value });
  }

  return (
    <section>
      <h3>Project Settings</h3>

      <label>
        Project Name
        <input
          value={settings.name}
          onChange={(event) => update("name", event.target.value)}
        />
      </label>

      <label>
        Description
        <textarea
          value={settings.description}
          onChange={(event) => update("description", event.target.value)}
        />
      </label>

      <label>
        Canvas Width
        <input
          type="number"
          min={320}
          value={settings.width}
          onChange={(event) => update("width", Math.max(320, Number(event.target.value)))}
        />
      </label>

      <label>
        Canvas Height
        <input
          type="number"
          min={200}
          value={settings.height}
          onChange={(event) => update("height", Math.max(200, Number(event.target.value)))}
        />
      </label>

      <label>
        Background
        <input
          type="color"
          value={settings.backgroundColor}
          onChange={(event) => update("backgroundColor", event.target.value)}
        />
      </label>
    </section>
  );
}
