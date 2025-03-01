import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        blog: "blog.html",
      },
    },
  },
  server: {
    historyApiFallback: true, // Habilita el modo SPA para desarrollo local
  },
});
