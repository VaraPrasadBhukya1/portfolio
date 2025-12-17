import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'www.way2studios.com',
      'way2studios.com',
      'reelreporter.way2news.com',
      'www.reelreporter.way2news.com',
      'unreprievable-redundantly-krissy.ngrok-free.dev'
    ],
  }
})