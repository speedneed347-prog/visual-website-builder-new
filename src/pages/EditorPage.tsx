
import React from "react";
import { useParams } from "react-router-dom";
import EditorLayout from "../components/editor/EditorLayout";

export default function EditorPage() {
  const { projectId } = useParams<{ projectId: string }>();

  return <EditorLayout projectId={projectId ?? "new"} />;
}
