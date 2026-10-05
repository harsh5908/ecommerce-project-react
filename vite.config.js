import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://ecommerce-project-react-backend-4.onrender.com',
        changeOrigin: true
      },
      '/images': {
        target: 'https://ecommerce-project-react-backend-4.onrender.com',
        changeOrigin: true
      }
    }
  }
})