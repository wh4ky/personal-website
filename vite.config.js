// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        contact: "./contact/index.html",
        mail: "./mail/index.html",
        specs: "./specs/index.html",
      },
    },
  },
});
