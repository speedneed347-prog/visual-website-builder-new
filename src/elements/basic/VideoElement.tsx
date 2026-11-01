import type { CSSProperties } from "react";

type Props = {
  src?: string;
  controls?: boolean;
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  poster?: string;
  style?: CSSProperties;
};

export default function VideoElement({
  src, controls = true, muted = false, autoPlay = false, loop = false, poster, style
}: Props) {
  return (
    <video
      src={src}
      controls={controls}
      muted={muted}
      autoPlay={autoPlay}
      loop={loop}
      poster={poster}
      playsInline
      style={{ display: "block", width: "100%", ...style }}
    />
  );
}
