import { defineConfig } from 'astro/config'
import react from '@astrojs/react';

// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default defineConfig({
  alias: {
      $: './src',
      '$api': './src/api',
  },
  integrations: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  site: 'https://danrichardson.net',
  trailingSlash: 'always',
  vite: {},
});
