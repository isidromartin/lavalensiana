import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    sitemap({
      hostname: "https://lavalensiana.com",
    }),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        blog: "blog.html",
      },
    },
  },
});
