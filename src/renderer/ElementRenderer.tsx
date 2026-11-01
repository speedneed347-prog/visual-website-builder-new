import type { CSSProperties } from "react";
import type { DocumentNode } from "../document/documentFactory";

import TextElement from "../elements/basic/TextElement";
import HeadingElement from "../elements/basic/HeadingElement";
import ImageElement from "../elements/basic/ImageElement";
import VideoElement from "../elements/basic/VideoElement";
import ButtonElement from "../elements/basic/ButtonElement";
import LinkElement from "../elements/basic/LinkElement";
import DividerElement from "../elements/basic/DividerElement";
import SectionElement from "../elements/layout/SectionElement";
import ContainerElement from "../elements/layout/ContainerElement";
import FlexElement from "../elements/layout/FlexElement";
import GridElement from "../elements/layout/GridElement";
import RowElement from "../elements/layout/RowElement";
import ColumnElement from "../elements/layout/ColumnElement";
import StackElement from "../elements/layout/StackElement";
import SpacerElement from "../elements/layout/SpacerElement";

type Props = {
  node: DocumentNode;
  selectedId?: string | null;
  onSelect?: (id: string) => void;
};

const componentMap: Record<string, React.ComponentType<any>> = {
  text: TextElement,
  heading: HeadingElement,
  image: ImageElement,
  video: VideoElement,
  button: ButtonElement,
  link: LinkElement,
  divider: DividerElement,
  section: SectionElement,
  container: ContainerElement,
  flex: FlexElement,
  grid: GridElement,
  row: RowElement,
  column: ColumnElement,
  stack: StackElement,
  spacer: SpacerElement
};

export default function ElementRenderer({ node, selectedId, onSelect }: Props) {
  const Component = componentMap[node.type];
  const children = node.children.map((child) => (
    <ElementRenderer
      key={child.id}
      node={child}
      selectedId={selectedId}
      onSelect={onSelect}
    />
  ));

  const style = node.styles as CSSProperties;
  const props = node.props ?? {};

  return (
    <div
      data-element-id={node.id}
      onClick={(event) => {
        event.stopPropagation();
        onSelect?.(node.id);
      }}
      style={{
        position: "relative",
        outline: selectedId === node.id ? "2px solid #635bff" : "none",
        outlineOffset: 2,
        minWidth: 0,
        ...style
      }}
    >
      {Component ? (
        <Component {...props}>
          {children}
        </Component>
      ) : (
        <div style={{ padding: 12, border: "1px dashed #ef4444" }}>
          Unknown element: {node.type}
          {children}
        </div>
      )}
    </div>
  );
}
