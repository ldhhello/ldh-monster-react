import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
      plugins: [
        [
          '@swc/plugin-styled-components',
          { minify: true, ssr: false, fileName: false, displayName: false }
        ],
      ],
    })],
})
