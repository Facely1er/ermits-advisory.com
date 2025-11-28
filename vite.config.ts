/// <reference types="vitest" />
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
          // React vendor chunk - separate React core from React DOM
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              // Separate React core from React DOM for better caching
              if (id.includes('react-dom')) {
                return 'vendor-react-dom';
              }
              if (id.includes('react-router')) {
                return 'vendor-router';
              }
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
    // Enable HTTP/2 for development
    https: false,
    // Optimize HMR
    hmr: {
      overlay: false
    }
  },
  // Vitest testing configuration
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/mockData',
        'dist/',
        'api/'
      ]
    }
  }
}));