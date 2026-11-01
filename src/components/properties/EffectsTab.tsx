
import React from "react";

interface EffectsTabProps {
  values?: Record<string, string>;
  onChange?: (key: string, value: string) => void;
}

export default function EffectsTab({
  values = {},
  onChange,
}: EffectsTabProps) {
  return (
    <section>
      <h4>Effects</h4>

      <label style={{ display: "block", marginBottom: 14 }}>
        Box Shadow
        <input
          type="text"
          value={values.boxShadow ?? ""}
          onChange={(event) => onChange?.("boxShadow", event.target.value)}
          placeholder="0 4px 12px rgba(0,0,0,0.1)"
        />
      </label>

      <label style={{ display: "block", marginBottom: 14 }}>
        Filter
        <input
          type="text"
          value={values.filter ?? ""}
          onChange={(event) => onChange?.("filter", event.target.value)}
          placeholder="blur(0px)"
        />
      </label>

      <label>
        Transition
        <input
          type="text"
          value={values.transition ?? "all 0.2s ease"}
          onChange={(event) => onChange?.("transition", event.target.value)}
        />
      </label>
    </section>
  );
}
