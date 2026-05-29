import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Relative base so the build works on GitHub Pages project sites
// (served from https://<user>.github.io/<repo>/) without hardcoding the repo name.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
