export type ElementCategory = {
  id: string;
  label: string;
  description: string;
};

export const elementCategories: ElementCategory[] = [
  { id: "basic", label: "Basic", description: "Text, images, buttons and media" },
  { id: "layout", label: "Layout", description: "Containers and layout structures" },
  { id: "forms", label: "Forms", description: "Inputs and form controls" },
  { id: "advanced", label: "Advanced", description: "Reusable interface components" }
];

export function getCategoryById(id: string) {
  return elementCategories.find((category) => category.id === id) ?? null;
}
