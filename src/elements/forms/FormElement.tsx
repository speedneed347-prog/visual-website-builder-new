import type { FormEvent, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  action?: string;
  method?: "get" | "post";
};

export default function FormElement({
  children, onSubmit, action, method = "post"
}: Props) {
  return (
    <form action={action} method={method} onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {children}
    </form>
  );
}
