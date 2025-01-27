// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        about: "./blog/index.html",
        contact: "./contact/index.html",
      },
    },
  },
});
