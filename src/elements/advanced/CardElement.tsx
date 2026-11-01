import type { CSSProperties, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  style?: CSSProperties;
};

export default function CardElement({
  children, title, description, image, style
}: Props) {
  return (
    <article style={{
      overflow: "hidden", border: "1px solid #e5e7eb",
      borderRadius: 12, background: "#fff", ...style
    }}>
      {image && <img src={image} alt="" style={{ width: "100%", display: "block" }} />}
      <div style={{ padding: 16 }}>
        {title && <h3 style={{ margin: "0 0 8px" }}>{title}</h3>}
        {description && <p style={{ margin: "0 0 12px", color: "#64748b" }}>{description}</p>}
        {children}
      </div>
    </article>
  );
}
