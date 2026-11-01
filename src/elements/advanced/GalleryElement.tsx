import type { CSSProperties } from "react";

type GalleryImage = {
  id: string;
  src: string;
  alt?: string;
};

type Props = {
  images?: GalleryImage[];
  columns?: number;
  gap?: number;
  style?: CSSProperties;
};

export default function GalleryElement({
  images = [],
  columns = 3,
  gap = 12,
  style
}: Props) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${Math.max(1, columns)}, minmax(0, 1fr))`,
      gap,
      ...style
    }}>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt ?? ""}
          loading="lazy"
          style={{
            display: "block",
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            borderRadius: 8
          }}
        />
      ))}
    </div>
  );
}
