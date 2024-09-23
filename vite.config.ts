import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "condition-component",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: (id) => {
        if (["react", "react-dom"].includes(id)) return true;

        if (/\.test\.(t|j)sx?$/.test(id)) return true;

        return false;
      },
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: false,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), dts()],
});
