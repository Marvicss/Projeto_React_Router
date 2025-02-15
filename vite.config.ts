import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ],
  resolve: {
    alias: {
      events: 'events/', 
    }
  },
  optimizeDeps: {
    exclude: ['parse'],
    include: ['parse/dist/parse.min.js'],
  }
})
