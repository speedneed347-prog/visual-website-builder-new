export type TemplateCategory = {
  id: string;
  label: string;
  description: string;
};

export const templateCategories: TemplateCategory[] = [
  { id: "business", label: "Business", description: "Business and company websites" },
  { id: "portfolio", label: "Portfolio", description: "Personal and creative portfolios" },
  { id: "blog", label: "Blog", description: "Articles and editorial websites" },
  { id: "ecommerce", label: "E-commerce", description: "Online store layouts" },
  { id: "landing", label: "Landing Page", description: "Product and campaign pages" },
  { id: "education", label: "Education", description: "School and learning websites" }
];

export function getTemplateCategory(id: string) {
  return templateCategories.find((category) => category.id === id) ?? null;
}
