// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  optimizeDeps: {
    include: ['vue-chartkick'],
  },
  plugins: [vue()],
  base: '/appgestion',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
  
});
