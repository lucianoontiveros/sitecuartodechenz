import million from "million/compiler";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  base: '/14-react-router-6-4/',  // Ajusta esto al nombre de tu repositorio
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, // Esto permite que las rutas trabajen correctamente en una SPA
  },
})