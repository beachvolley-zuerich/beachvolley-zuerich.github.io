import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    prefixDefaultLocale: "de"
  },

  integrations: [tailwind()],
  site: 'https://beachvolley-zuerich.github.io',
  output: "server",

  adapter: node({
    mode: "standalone"
  })
});