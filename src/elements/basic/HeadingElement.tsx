import type { CSSProperties } from "react";

type Props = {
  text?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  style?: CSSProperties;
  className?: string;
};

export default function HeadingElement({
  text = "Your heading",
  level = 2,
  style,
  className
}: Props) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={className} style={{ margin: 0, ...style }}>{text}</Tag>;
}
