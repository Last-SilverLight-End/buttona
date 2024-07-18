import * as path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'; // vite-tsconfig-paths를 임포트합니다.

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/components/index.ts"),
      name: "index",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    commonjsOptions: {
      esmExternals: ["react"],
    },
  },
  plugins: [
    dts({
      tsconfigPath:"tsconfig.node.json",
    }),
    react(),
    tsconfigPaths(),
  ],
});
