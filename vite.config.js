import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sitemap from "vite-plugin-sitemap";

import fs from "fs";
import path from "path";

const robotsContent = `User-agent: *\nAllow: /\nSitemap: https://lavalensiana.com/sitemap.xml`;

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    sitemap({
      hostname: "https://lavalensiana.com",
      robotsTxt: false,
    }),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        blog: "blog.html",
      },
      plugins: [
        {
          name: "create-robots-txt",
          closeBundle() {
            fs.writeFileSync(path.resolve("dist", "robots.txt"), robotsContent);
          },
        },
      ],
    },
  },
});
