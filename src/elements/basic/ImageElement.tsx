import type { CSSProperties } from "react";

type Props = {
  src?: string;
  alt?: string;
  style?: CSSProperties;
  className?: string;
};

export default function ImageElement({ src, alt = "Image", style, className }: Props) {
  if (!src) {
    return (
      <div className={className} style={{
        minHeight: 120, display: "grid", placeItems: "center",
        background: "#f1f5f9", color: "#64748b", ...style
      }}>
        Select an image
      </div>
    );
  }

  return <img src={src} alt={alt} className={className}
    style={{ display: "block", maxWidth: "100%", ...style }} />;
}
