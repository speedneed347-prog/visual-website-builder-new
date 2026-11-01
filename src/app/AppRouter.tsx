
import React, { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const ProjectPage = lazy(() => import("../pages/ProjectPage"));
const EditorPage = lazy(() => import("../pages/EditorPage"));
const PreviewPage = lazy(() => import("../pages/PreviewPage"));
const TemplatesPage = lazy(() => import("../pages/TemplatesPage"));
const SettingsPage = lazy(() => import("../pages/SettingsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

function PageLoader() {
  return (
    <div className="page-loader" role="status">
      Loading...
    </div>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/dashboard" element={<DashboardPage />} />

          <Route
            path="/project/:projectId"
            element={<ProjectPage />}
          />

          <Route
            path="/editor/:projectId"
            element={<EditorPage />}
          />

          <Route
            path="/preview/:projectId"
            element={<PreviewPage />}
          />

          <Route path="/templates" element={<TemplatesPage />} />

          <Route path="/settings" element={<SettingsPage />} />

          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
