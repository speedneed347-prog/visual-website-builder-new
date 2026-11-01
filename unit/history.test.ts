import { describe, expect, it } from "vitest";
import {
  createHistory,
  pushHistory,
  undoHistory,
  redoHistory
} from "../../src/engine/history/historyEngine";

describe("History engine", () => {
  it("records a new state", () => {
    const history = pushHistory(createHistory(1), 2);
    expect(history.present).toBe(2);
    expect(history.past).toEqual([1]);
  });

  it("undoes a change", () => {
    const history = undoHistory(pushHistory(createHistory(1), 2));
    expect(history.present).toBe(1);
  });

  it("redoes a change", () => {
    const initial = createHistory(1);
    const changed = pushHistory(initial, 2);
    const undone = undoHistory(changed);
    const redone = redoHistory(undone);
    expect(redone.present).toBe(2);
  });

  it("does nothing when there is no undo history", () => {
    const history = createHistory("initial");
    expect(undoHistory(history)).toEqual(history);
  });
});
