
import React from "react";

interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
}

export default function Loading({
  message = "Loading...",
  fullScreen = false,
}: LoadingProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        minHeight: fullScreen ? "100vh" : 120,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
      }}
    >
      <div
        aria-hidden="true"
        style={{
          width: 30,
          height: 30,
          border: "3px solid #e5e5ee",
          borderTopColor: "#635bff",
          borderRadius: "50%",
          animation: "builder-spin 0.8s linear infinite",
        }}
      />

      <span>{message}</span>

      <style>
        {`
          @keyframes builder-spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
