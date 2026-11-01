export type Command<TContext = unknown> = {
  id: string;
  label: string;
  execute: (context: TContext) => void | Promise<void>;
  undo?: (context: TContext) => void | Promise<void>;
};

export class CommandManager<TContext = unknown> {
  private commands = new Map<string, Command<TContext>>();

  register(command: Command<TContext>) {
    this.commands.set(command.id, command);
  }

  unregister(id: string) {
    this.commands.delete(id);
  }

  get(id: string) {
    return this.commands.get(id) ?? null;
  }

  async execute(id: string, context: TContext) {
    const command = this.get(id);
    if (!command) throw new Error(`Command not found: ${id}`);
    await command.execute(context);
  }

  async undo(id: string, context: TContext) {
    const command = this.get(id);
    if (!command?.undo) return;
    await command.undo(context);
  }

  list() {
    return [...this.commands.values()];
  }
}
