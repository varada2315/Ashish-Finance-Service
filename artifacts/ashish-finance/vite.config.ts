import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cartographer } from '@replit/vite-plugin-cartographer'
import { devBanner } from '@replit/vite-plugin-dev-banner'
import runtimeErrorModal from '@replit/vite-plugin-runtime-error-modal'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    cartographer(),
    devBanner(),
    runtimeErrorModal(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, '../../attached_assets'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 6572,
    allowedHosts: ['tr.cyberpunk.co.in'],
  },
  preview: {
    host: '0.0.0.0',
    port: 6572,
  },
})