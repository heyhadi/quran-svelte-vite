import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'


const pwaManifest = {
    name: 'SVELTE QURAN',
    short_name: 'SVELTE QURAN Demo',
    description: 'Coolness in Vite Svelte',
    theme_color: '#ffffff',
    icons: [
      {
        "src": "/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(),  VitePWA({
    manifest: pwaManifest,
    includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'assets/*'],
  }),]
})
