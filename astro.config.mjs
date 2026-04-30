// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://uatkd.github.io',
  base: '/astro-website', 
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()]
});