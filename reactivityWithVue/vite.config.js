import { defineConfig } from 'vite';

export default defineConfig({
    publicDir: 'public',
    server: {
        port: 3006,
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets'
    }
});