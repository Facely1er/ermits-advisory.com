import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import removeConsole from 'vite-plugin-remove-console';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Only remove console statements in production builds
    ...(mode === 'production' ? [removeConsole()] : [])
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));