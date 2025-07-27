import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
  proxy: {
      '/api': {
        target: 'http://localhost:3000', // your backend server
        changeOrigin: true,
        // optional: remove /api from request if backend doesn’t expect it
        // rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
