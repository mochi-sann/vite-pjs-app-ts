import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, ".");

export default defineConfig({
  root,
  build: {
    rollupOptions: {
      input: {
        ari: resolve(root, "src/ari/index.html"),
        index: resolve(root, "./index.html"),
      },
    },
  },
});
