import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(),  VitePWA({
    filename: 'sw.ts',
    includeAssets: ['*.svg'],
    includeManifestIcons: false,
    injectRegister: false,
    manifest: {
      name: 'Svelte Quran',
      short_name: 'Svelte Quran',
      description: 'Read and listen Quran on the go',
      theme_color: '#ced4da',
      icons: [
        {
          src: 'vite.svg',
          sizes: '192x192',
          type: 'image/svg',
        },
        {
          src: 'vite.svg',
          sizes: '512x512',
          type: 'image/svg',
        },
        {
          src: 'vite.svg',
          sizes: '512x512',
          type: 'image/svg',
          purpose: 'maskable',
        },
      ],
    },
    srcDir: 'src/service-worker',
    strategies: 'injectManifest',
  })]
})
