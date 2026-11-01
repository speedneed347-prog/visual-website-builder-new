
import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
}

const variants: Record<ButtonVariant, React.CSSProperties> = {
  primary: { background: "#635bff", color: "#fff", border: "1px solid #635bff" },
  secondary: { background: "#fff", color: "#222", border: "1px solid #ddd" },
  danger: { background: "#dc3545", color: "#fff", border: "1px solid #dc3545" },
  ghost: { background: "transparent", color: "#635bff", border: "1px solid transparent" },
};

export default function Button({
  variant = "primary",
  loading = false,
  disabled,
  children,
  style,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      style={{
        padding: "10px 16px",
        borderRadius: 8,
        font: "inherit",
        cursor: disabled || loading ? "not-allowed" : "pointer",
        opacity: disabled || loading ? 0.6 : 1,
        ...variants[variant],
        ...style,
      }}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
