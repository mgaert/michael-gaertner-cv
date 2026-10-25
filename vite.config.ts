import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: '.',
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    target: 'ES2020',
    minify: 'terser',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        de: path.resolve(__dirname, 'de/index.html'),
        en: path.resolve(__dirname, 'en/index.html'),
      },
    },
  },
  server: {
    port: 5173,
    strictPort: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
