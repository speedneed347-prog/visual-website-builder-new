import type { BuilderDocument } from "../document/documentFactory";

export type WebsiteTemplate = {
  id: string;
  name: string;
  description: string;
  category: string;
  thumbnail?: string;
  create: () => BuilderDocument;
};

export class TemplateRegistry {
  private templates = new Map<string, WebsiteTemplate>();

  register(template: WebsiteTemplate) {
    this.templates.set(template.id, template);
  }

  get(id: string) {
    return this.templates.get(id) ?? null;
  }

  list(category?: string) {
    const templates = [...this.templates.values()];

    return category
      ? templates.filter((item) => item.category === category)
      : templates;
  }

  create(id: string) {
    const template = this.get(id);
    if (!template) throw new Error(`Template not found: ${id}`);
    return template.create();
  }
}

export const templateRegistry = new TemplateRegistry();
