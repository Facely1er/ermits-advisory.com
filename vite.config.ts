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
  build: {
    // Enable code splitting and chunk optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React and related libraries
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // UI libraries chunk
          ui: ['framer-motion', 'lucide-react'],
          // Chart libraries chunk
          charts: ['chart.js', 'react-chartjs-2'],
          // Analytics chunk
          analytics: ['@vercel/analytics']
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'esbuild',
    // Optimize CSS
    cssCodeSplit: true,
    // Enable source maps for production debugging
    sourcemap: mode !== 'production'
  },
  // Performance optimizations
  server: {
    // Enable HTTP/2 for development
    https: false,
    // Optimize HMR
    hmr: {
      overlay: false
    }
  }
}));