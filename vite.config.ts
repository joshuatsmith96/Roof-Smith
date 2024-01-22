// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/Roof-Smith/',
  }

  if (command !== 'serve') {
    config.base = '/Roof-Smith/'
  }

  return config
})