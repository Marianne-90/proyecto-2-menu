import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      utils:"/src/utils",
      pages:"/src/pages",
      components:"/src/components",
      img:"/src/img",
      hooks:"/src/hooks",
      data:"/src/data",
      routes:"/src/routes",
    },
  },
})
