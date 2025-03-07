import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    minify: "esbuild",
    treeshake: true,
    rollupOptions: {
      input: {
        main: "index.html",
        blog: "blog.html",
      },
      plugins: [],
    },
  },
});
