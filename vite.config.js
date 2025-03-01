import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/lavalensiana/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        blog: "blog.html",
      },
    },
  },
});
