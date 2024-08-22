import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/green-ecommerce-page/', // Make sure this matches your repository name
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html', // Ensure this path is correct
    },
  },
});
