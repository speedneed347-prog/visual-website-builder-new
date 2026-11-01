
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/visual-website-builder-new/",

  plugins: [react()],

  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname
    }
  },

  server: {
    host: "0.0.0.0",
    port: 5173,
    open: true
  },

  build: {
    outDir: "dist",
    sourcemap: true,
    emptyOutDir: true
  }
});
