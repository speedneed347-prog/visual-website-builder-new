import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  href?: string;
  target?: "_self" | "_blank";
  onClick?: () => void;
  disabled?: boolean;
};

export default function InteractionRenderer({
  children,
  href,
  target = "_self",
  onClick,
  disabled = false
}: Props) {
  if (href && !disabled) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <span
      role={onClick ? "button" : undefined}
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      style={{ cursor: onClick && !disabled ? "pointer" : "inherit" }}
    >
      {children}
    </span>
  );
}
