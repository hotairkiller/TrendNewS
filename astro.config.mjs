import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://hotairkiller.github.io',
  integrations: [preact()]
});