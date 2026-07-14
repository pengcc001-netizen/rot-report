import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules') && (id.includes('react') || id.includes('react-dom') || id.includes('react-router') || id.includes('react-helmet'))) {
            return 'react-vendor'
          }
        },
      },
    },
  },
})
