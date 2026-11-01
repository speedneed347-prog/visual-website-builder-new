
import React from "react";

const elementGroups = {
  Basic: ["Heading", "Text", "Button", "Image", "Link", "Divider"],
  Layout: ["Container", "Section", "Columns", "Grid", "Flexbox"],
  Media: ["Video", "Audio", "Icon", "Embed"],
  Forms: ["Input", "Textarea", "Checkbox", "Select", "Form"],
};

interface ElementsPanelProps {
  onAddElement?: (type: string) => void;
}

export default function ElementsPanel({
  onAddElement,
}: ElementsPanelProps) {
  return (
    <div className="elements-panel">
      <h3>Elements</h3>

      {Object.entries(elementGroups).map(([group, elements]) => (
        <section key={group}>
          <h4>{group}</h4>

          <div className="element-list">
            {elements.map((element) => (
              <button
                key={element}
                type="button"
                onClick={() => onAddElement?.(element.toLowerCase())}
                draggable
                onDragStart={(event) => {
                  event.dataTransfer.setData(
                    "application/x-builder-element",
                    element.toLowerCase()
                  );
                  event.dataTransfer.effectAllowed = "copy";
                }}
              >
                {element}
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
