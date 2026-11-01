
export const ROUTES = {
  landing: "/",
  dashboard: "/dashboard",
  project: "/project/:projectId",
  editor: "/editor/:projectId",
  preview: "/preview/:projectId",
  templates: "/templates",
  settings: "/settings",
} as const;

export const ROUTE_NAMES = {
  landing: "Home",
  dashboard: "Dashboard",
  project: "Project",
  editor: "Editor",
  preview: "Preview",
  templates: "Templates",
  settings: "Settings",
} as const;

export const PUBLIC_ROUTES = [
  ROUTES.landing,
];

export const PROTECTED_ROUTES = [
  ROUTES.dashboard,
  ROUTES.project,
  ROUTES.editor,
  ROUTES.preview,
  ROUTES.templates,
  ROUTES.settings,
];
