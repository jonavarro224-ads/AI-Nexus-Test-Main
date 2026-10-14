import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  ssr: {
    // Keep react-router-dom and react-router as SSR externals so Node.js
    // resolves them natively (CJS via its built-in interop).
    // Setting noExternal caused Vite to re-bundle them as ESM, which broke
    // the react-router/dom import (no default export in ESM wrapper).
    external: ['react-router-dom', 'react-router'],
  },
});
