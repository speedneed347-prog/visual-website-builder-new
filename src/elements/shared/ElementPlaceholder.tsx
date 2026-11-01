type Props = {
  label?: string;
  description?: string;
  height?: number;
};

export default function ElementPlaceholder({
  label = "Element",
  description = "Configure this element in the properties panel.",
  height = 100
}: Props) {
  return (
    <div style={{
      minHeight: height,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 6,
      padding: 16,
      boxSizing: "border-box",
      background: "#f8fafc",
      border: "1px dashed #cbd5e1",
      borderRadius: 8,
      color: "#475569",
      textAlign: "center"
    }}>
      <strong>{label}</strong>
      <span style={{ fontSize: 12 }}>{description}</span>
    </div>
  );
}
