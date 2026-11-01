export type ResponsiveValues<T> = {
  base: T;
  tablet?: T;
  mobile?: T;
};

export type DeviceMode = "desktop" | "tablet" | "mobile";

export function resolveResponsiveValue<T>(
  values: ResponsiveValues<T>,
  device: DeviceMode
): T {
  if (device === "mobile") {
    return values.mobile ?? values.tablet ?? values.base;
  }

  if (device === "tablet") {
    return values.tablet ?? values.base;
  }

  return values.base;
}
