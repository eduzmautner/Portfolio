import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',        // repo path
  build: {
    outDir: 'docs',           // build directly to /docs
    emptyOutDir: true,
    // Ensure assets are copied correctly
    assetsDir: 'assets'
  },
  // Ensure assets are handled correctly
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.mov', '**/*.jpeg'],
  // Configure public directory
  publicDir: 'public'
})
