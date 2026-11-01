import { useState } from "react";
import type { ReactNode } from "react";

type Slide = {
  id: string;
  content: ReactNode;
};

type Props = {
  slides?: Slide[];
  initialIndex?: number;
  showControls?: boolean;
};

export default function CarouselElement({
  slides = [],
  initialIndex = 0,
  showControls = true
}: Props) {
  const [index, setIndex] = useState(() =>
    Math.min(Math.max(initialIndex, 0), Math.max(0, slides.length - 1))
  );

  if (!slides.length) {
    return <div style={{ padding: 24, background: "#f1f5f9" }}>No slides</div>;
  }

  const move = (direction: number) => {
    setIndex((current) =>
      (current + direction + slides.length) % slides.length
    );
  };

  return (
    <section aria-roledescription="carousel">
      <div aria-live="polite">{slides[index]?.content}</div>

      {showControls && (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          marginTop: 12
        }}>
          <button type="button" onClick={() => move(-1)} aria-label="Previous slide">
            Previous
          </button>
          <span>{index + 1} / {slides.length}</span>
          <button type="button" onClick={() => move(1)} aria-label="Next slide">
            Next
          </button>
        </div>
      )}
    </section>
  );
}
