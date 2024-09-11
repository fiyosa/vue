import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  server: {
    port: 3000,
    host: 'localhost',
  },

  build: {
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) return 'main.css'
          return 'assets/[name].[ext]'
        },
      },
    },
  },

  preview: {
    port: 8080,
    host: 'localhost',
  },
})
