import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  base: '/saraluca-wedding-2/',
  build: {
    rollupOptions: {
      external: [],
    },
  },
})