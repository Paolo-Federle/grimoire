import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/grimoire/",
  server: {
    port: 3000,
    open: "/grimoire/",
  },
  build: {
    outDir: "dist",
  },
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/tests/**/*.{test,spec}.{js,jsx}"],
    exclude: ["tests/**"],
    setupFiles: "./src/setupTests.js",
  },
});
