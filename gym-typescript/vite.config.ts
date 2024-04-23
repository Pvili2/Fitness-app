import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // this is from -D node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //Ennek segítségével egy alias-al könnyedén elérjük az src directoryt 
  //nem kell ezt csinálni: "../../../src/........."
  resolve: {
    alias: [{find: "@", replacement: path.resolve(__dirname, 'src')}]
    }
})
