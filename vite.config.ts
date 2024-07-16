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
    dts(),
    react(),
    tsconfigPaths({ // tsconfig-paths 플러그인을 설정에 추가합니다.
      root: __dirname,
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components'), // '@components' 경로 별칭을 설정합니다.
        '@styles': path.resolve(__dirname, 'src/components/styles') // '@styles' 경로 별칭을 설정합니다.
      }
    })
  ],
});
