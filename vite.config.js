import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'C:/Jupenta Website/tabernam-admin-template-in-react-js-master/src'),
    }
  }
});
