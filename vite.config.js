import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteMinifyPlugin({}), legacy({
    targets: ['defaults', 'not IE 11']
  })],
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      input: {
        file1: path.resolve(__dirname, 'index.html')
      }
    },
    minify: 'esbuild'
  }
})
