import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Ensure this doesn't interfere with dependencies if it's an unused or problematic package
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Set the correct alias path for better imports
    },
  },
  server: {
    hmr: true, // Ensure hot module replacement (HMR) works correctly during development
  },
  build: {
    // Optional: Add configurations for building optimized production bundles
  },
});
