import { useEditorStore } from "../stores/editorStore";
import { useUIStore } from "../stores/uiStore";

export function useEditor() {
  const mode = useEditorStore((state) => state.mode);
  const zoom = useEditorStore((state) => state.zoom);
  const device = useEditorStore((state) => state.device);
  const setMode = useEditorStore((state) => state.setMode);
  const setZoom = useEditorStore((state) => state.setZoom);
  const setDevice = useEditorStore((state) => state.setDevice);

  const activePanel = useUIStore((state) => state.activePanel);
  const setActivePanel = useUIStore((state) => state.setActivePanel);

  return {
    mode, zoom, device,
    setMode, setZoom, setDevice,
    activePanel, setActivePanel
  };
}
