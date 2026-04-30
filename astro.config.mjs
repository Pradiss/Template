// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  

  integrations: [
    sitemap(),
    icon({
      include: {
        mdi: ['whatsapp', 'instagram', 'facebook'],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});