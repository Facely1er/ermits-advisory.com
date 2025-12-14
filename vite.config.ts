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
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom', 'react-router-dom', 'react/jsx-runtime'],
  },
  build: {
    // Enable code splitting and chunk optimization
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Don't split React - keep it in the main bundle to avoid loading order issues
          // This ensures React is always available when needed
          if (id.includes('node_modules')) {
            // Exclude React from chunking - return null/undefined to keep in main bundle
            // Check for React modules first before other chunking logic
            if (
              id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/react-router') ||
              id.includes('node_modules/scheduler/') ||
              id.includes('react/jsx-runtime') ||
              id.includes('react/index')
            ) {
              // Don't return a chunk name - this keeps React in the entry bundle
              return;
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