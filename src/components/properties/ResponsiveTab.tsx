
import React from "react";

type Device = "desktop" | "tablet" | "mobile";

interface ResponsiveTabProps {
  device?: Device;
  onDeviceChange?: (device: Device) => void;
}

export default function ResponsiveTab({
  device = "desktop",
  onDeviceChange,
}: ResponsiveTabProps) {
  const devices: { id: Device; label: string; width: number }[] = [
    { id: "desktop", label: "Desktop", width: 1200 },
    { id: "tablet", label: "Tablet", width: 768 },
    { id: "mobile", label: "Mobile", width: 375 },
  ];

  return (
    <section>
      <h4>Responsive Design</h4>
      <p>Choose a viewport to configure responsive styles.</p>

      {devices.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onDeviceChange?.(item.id)}
          aria-pressed={device === item.id}
          style={{
            display: "block",
            width: "100%",
            padding: 10,
            marginBottom: 8,
            border: "1px solid #ddd",
            borderRadius: 7,
            background: device === item.id ? "#635bff18" : "#fff",
          }}
        >
          {item.label} — {item.width}px
        </button>
      ))}
    </section>
  );
}
