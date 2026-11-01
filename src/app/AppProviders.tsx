
import React, { type ReactNode } from "react";

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({
  children,
}: AppProvidersProps) {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}
