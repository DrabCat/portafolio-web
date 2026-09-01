import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  experimental: {
    clientPrerender: true
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
