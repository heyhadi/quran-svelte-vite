import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from 'path'


const pwaManifest = {
    name: 'SVELTE QURAN',
    short_name: 'SVELTE QURAN Demo',
    description: 'Coolness in Vite Svelte',
    theme_color: '#0c50b6',
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
  }),],
  publicDir: "src/static",
  resolve: {
    alias: {
      $lib: resolve('./src/lib'),
      $components: resolve('./src/components'),
      $static: resolve('./src/static'),
    }
  }
})
