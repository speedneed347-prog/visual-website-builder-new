import { useEffect, useState } from "react";

type Viewport = {
  width: number;
  height: number;
  device: "desktop" | "tablet" | "mobile";
};

function getViewport(): Viewport {
  const width = typeof window === "undefined" ? 1440 : window.innerWidth;

  return {
    width,
    height: typeof window === "undefined" ? 900 : window.innerHeight,
    device: width <= 767 ? "mobile" : width <= 1024 ? "tablet" : "desktop"
  };
}

export function useResponsive() {
  const [viewport, setViewport] = useState<Viewport>(getViewport);

  useEffect(() => {
    const update = () => setViewport(getViewport());

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return viewport;
}
