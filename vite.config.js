import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/admin-one-vue-tailwind/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0", // Permite accesos externos
    port: 5173, // Cambia si usas un puerto diferente
    strictPort: false, // Marca error si el puerto está ocupado
  },
});
