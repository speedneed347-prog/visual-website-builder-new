export type Breakpoint = {
  id: string;
  label: string;
  minWidth: number;
  maxWidth?: number;
};

export function getActiveBreakpoint(
  width: number,
  breakpoints: Breakpoint[]
): Breakpoint | null {
  const sorted = [...breakpoints].sort((a, b) => b.minWidth - a.minWidth);

  return sorted.find((breakpoint) =>
    width >= breakpoint.minWidth &&
    (breakpoint.maxWidth === undefined || width <= breakpoint.maxWidth)
  ) ?? null;
}
