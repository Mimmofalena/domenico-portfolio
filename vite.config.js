import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Deployed on GitHub Pages under /domenico-portfolio/
  base: "/domenico-portfolio/",
  build: {
    // Keep the CRA output folder so the gh-pages deploy script stays the same
    outDir: "build",
  },
  server: {
    port: 3000,
    open: true,
  },
});
