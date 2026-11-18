import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "es2022",
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        // Pustaka jarang berubah, kode aplikasi sering. Dipisah per kelompok agar
        // deploy berikutnya hanya mengganti hash chunk aplikasi, sementara
        // pengunjung lama memakai cache React / Framer Motion / three.js.
        // Bentuk fungsi diperlukan karena react-dom menarik subpath internalnya
        // (react-dom/client) sehingga tidak tertangkap pemisahan berbasis nama paket.
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (/[/\\](react-dom|react|scheduler)[/\\]/.test(id)) return "react";
          if (/[/\\](framer-motion|motion-dom|motion-utils)[/\\]/.test(id)) return "motion";
          if (/[/\\]three[/\\]/.test(id)) return "three";
        },
      },
    },
  },
  server: {
    watch: {
      // Hasil build jangan memicu full reload saat dev server berjalan.
      ignored: ["**/dist/**"],
    },
  },
});
