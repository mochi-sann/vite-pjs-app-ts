import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");

export default defineConfig({
  root,
  build: {
    rollupOptions: {
      input: {
        sample1: resolve(root, "ari/index.html"),
      },
    },
  },
});
