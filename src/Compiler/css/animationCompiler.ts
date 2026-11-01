import type { DocumentNode } from "../../document/documentFactory";

type AnimationConfig = {
  name: string;
  duration?: number;
  delay?: number;
  timing?: string;
  iterationCount?: number | "infinite";
};

export function compileAnimations(root: DocumentNode): string {
  const rules: string[] = [];

  function visit(node: DocumentNode) {
    const animation = node.props.animation as AnimationConfig | undefined;

    if (animation?.name) {
      const duration = Math.max(0, animation.duration ?? 500);
      const delay = Math.max(0, animation.delay ?? 0);
      const timing = animation.timing ?? "ease";
      const count = animation.iterationCount ?? 1;

      rules.push(
        `[data-element-id="${node.id}"]{animation:${animation.name} ${duration}ms ${timing} ${delay}ms ${count}}`
      );
    }

    node.children.forEach(visit);
  }

  visit(root);

  return rules.join("\n");
}
