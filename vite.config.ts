import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";

/**
 * The biomarker pages are static HTML folders under public/ (e.g. public/biomarkers/alt/).
 * GitHub Pages serves a folder's index.html, but the dev server would hand "/biomarkers"
 * to the React app, which shows its 404. This mirrors the production behaviour locally.
 */
const staticFolderIndex = (): Plugin => ({
  name: "static-folder-index",
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const url = req.url?.split("?")[0] ?? "";
      if (url !== "/" && !path.extname(url)) {
        const index = path.join(__dirname, "public", url, "index.html");
        if (fs.existsSync(index)) req.url = `${url.replace(/\/$/, "")}/index.html`;
      }
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), staticFolderIndex()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
});
