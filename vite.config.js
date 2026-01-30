import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Ejercicios-React/",
  esbuild: {
    jsx: "automatic",
  },
  server: {
    watch: {
      usePolling: true,
    },
    hmr: {
      port: 5173,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ejercicio1: resolve(__dirname, "src/ejercicio1/ejercicio1.html"),
        ejercicio2: resolve(__dirname, "src/ejercicio2/ejercicio2.html"),
        ejercicio3: resolve(__dirname, "src/ejercicio3/ejercicio3.html"),
        ejercicio4: resolve(__dirname, "src/ejercicio4/ejercicio4.html"),
        ejercicio5: resolve(__dirname, "src/ejercicio5/ejercicio5.html"),
        ejercicio6: resolve(__dirname, "src/ejercicio6/ejercicio6.html"),
        ejercicio7: resolve(__dirname, "src/ejercicio7/ejercicio7.html"),
        ejercicio8: resolve(__dirname, "src/ejercicio8/ejercicio8.html"),
        ejercicio9: resolve(__dirname, "src/ejercicio9/ejercicio9.html"),
      },
    },
  },
});
