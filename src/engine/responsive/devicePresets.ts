export type DevicePreset = {
  id: string;
  label: string;
  width: number;
  height: number;
};

export const devicePresets: DevicePreset[] = [
  { id: "desktop", label: "Desktop", width: 1440, height: 900 },
  { id: "laptop", label: "Laptop", width: 1280, height: 800 },
  { id: "tablet", label: "Tablet", width: 768, height: 1024 },
  { id: "mobile", label: "Mobile", width: 390, height: 844 },
  { id: "small-mobile", label: "Small Mobile", width: 320, height: 640 }
];

export function getDevicePreset(id: string) {
  return devicePresets.find((preset) => preset.id === id) ?? devicePresets[0];
}
