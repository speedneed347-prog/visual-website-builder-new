export type EditorCommandType =
  | "element.add"
  | "element.delete"
  | "element.duplicate"
  | "element.update"
  | "element.move"
  | "selection.clear"
  | "selection.select"
  | "history.undo"
  | "history.redo"
  | "document.save"
  | "document.reset";

export type EditorCommandPayload = {
  type: EditorCommandType;
  elementId?: string;
  parentId?: string | null;
  index?: number;
  data?: Record<string, unknown>;
};

export type EditorCommandResult = {
  success: boolean;
  message?: string;
  affectedIds?: string[];
};
