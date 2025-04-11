import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'pages/privacy.html'),
        minimal: resolve(__dirname, 'pages/minimal.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
});
