import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import preact from "@astrojs/preact";


export default defineConfig({
  output:'server',
  adapter:netlify(),
  
  integrations: [preact()]
});