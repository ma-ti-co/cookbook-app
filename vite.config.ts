import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig(({command, mode, ssrBuild }) => {
  plugins: [react()]
  if (command === 'serve') {
    const env = loadEnv(mode, process.cwd(), '')
    return {
      define: {
        __APP_ENV__:env.APP_ENV
      }
      // dev specific config
    }
  } else {
    // command === 'build'
    return {
      // build specific config
    }
  }
})