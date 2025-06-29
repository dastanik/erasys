/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../node_modules/.vite/web',
  server: {
    port: 4200,
    host: 'localhost',
    proxy: {
      // Proxy API requests starting with /api to the real server
      '/api': {
        target: 'https://www.hunqz.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
  preview: {
    port: 4200,
    host: 'localhost',
    // Optional: add proxy here if you want proxy during 'vite preview'
    // proxy: {
    //   '/api': {
    //     target: 'https://www.hunqz.com',
    //     changeOrigin: true,
    //     secure: true,
    //     rewrite: (path) => path.replace(/^\/api/, '/api'),
    //   },
    // },
  },
  plugins: [react()],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
