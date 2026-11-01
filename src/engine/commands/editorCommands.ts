import type {
  EditorCommandPayload,
  EditorCommandResult
} from "./commandTypes";

export type CommandExecutor = (
  payload: EditorCommandPayload
) => EditorCommandResult | Promise<EditorCommandResult>;

export class EditorCommands {
  private handlers = new Map<string, CommandExecutor>();

  register(type: EditorCommandPayload["type"], handler: CommandExecutor) {
    this.handlers.set(type, handler);
  }

  async dispatch(payload: EditorCommandPayload): Promise<EditorCommandResult> {
    const handler = this.handlers.get(payload.type);

    if (!handler) {
      return {
        success: false,
        message: `No handler registered for ${payload.type}`
      };
    }

    try {
      return await handler(payload);
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Command failed"
      };
    }
  }
}
