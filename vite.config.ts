import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import removeConsole from 'vite-plugin-remove-console';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
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
        manualChunks(id) {
          // React vendor chunk - keep React, ReactDOM, and React Router together to avoid initialization issues
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router') || id.includes('scheduler')) {
              // Keep all React-related packages in a single chunk to ensure proper initialization order
              return 'vendor-react';
            }
            // UI libraries chunk
            if (id.includes('framer-motion') || id.includes('lucide-react')) {
              return 'vendor-ui';
            }
            // Chart libraries chunk
            if (id.includes('chart.js') || id.includes('react-chartjs')) {
              return 'vendor-charts';
            }
            // Analytics chunk
            if (id.includes('@vercel/analytics')) {
              return 'vendor-analytics';
            }
            // Other node_modules go into a separate vendor chunk
            return 'vendor';
          }
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
    sourcemap: mode !== 'production',
    // Target modern browsers for smaller bundles
    target: 'es2015'
  },
  // Performance optimizations
  server: {
    // Optimize HMR
    hmr: {
      overlay: false
    }
  }
}));