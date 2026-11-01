import type { BuilderDocument, DocumentNode } from "../../document/documentFactory";

type Interaction = {
  event?: string;
  action?: string;
  value?: string;
};

function collectInteractions(node: DocumentNode): string[] {
  const interaction = node.props.interaction as Interaction | undefined;
  const result: string[] = [];

  if (interaction?.event && interaction.action) {
    const safeEvent = /^[a-zA-Z]+$/.test(interaction.event)
      ? interaction.event
      : "click";

    const safeId = JSON.stringify(node.id);
    const safeAction = JSON.stringify(interaction.action);
    const safeValue = JSON.stringify(interaction.value ?? "");

    result.push(
      `builderBind(${safeId},${JSON.stringify(safeEvent)},${safeAction},${safeValue});`
    );
  }

  node.children.forEach((child) => result.push(...collectInteractions(child)));
  return result;
}

export function compileInteractions(document: BuilderDocument): string {
  return collectInteractions(document.root).join("\n");
}
