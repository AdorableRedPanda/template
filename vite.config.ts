import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { resolve, dirname } from "node:path";
import { fileURLToPath } from 'node:url';

const rootDir = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    base: '',
    publicDir: './public',
    plugins: [react()],
    build: {
        outDir: './dist',
    },
    resolve: {
        alias: {
            '@': resolve(rootDir, 'src'),
        },
    },

    server: {
        open: true,
        port: 8085,
    }
})