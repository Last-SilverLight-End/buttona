import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
export default defineConfig({
    assetsInclude: ['/sb-preview/runtime.js'],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/components/index.ts'),
            name: 'react-carousel-image-optimized',
            formats: ['es', 'cjs'],
            fileName: function (format) { return "index.".concat(format, ".js"); },
        },
        rollupOptions: {
            external: ['react', 'react-dom', '**/*.stories.tsx'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
                banner: '"use client";',
                interop: 'auto',
            },
        },
        commonjsOptions: {
            esmExternals: ['react'],
        },
    },
    
});
