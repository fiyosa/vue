import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: 'src',
  publicDir: '../public',
  envDir: '..',
  define: {
    'process.env': process.env,
  },

  server: {
    port: 3000,
    host: 'localhost',
  },

  build: {
    outDir: '../build',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
            return 'images/[name].[hash][extname]'
          }

          if (/\.css$/.test(name ?? '')) {
            return 'css/[name].[hash][extname]'
          }

          return '[name].[hash][extname]'
        },
      },
    },
  },

  preview: {
    port: 8080,
    host: 'localhost',
  },
})
