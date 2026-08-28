import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

const base = process.env.BASE_PATH ?? '/course-test-website';
const site = process.env.SITE_URL ?? 'https://kongor-co.github.io';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  output: 'static',
  integrations: [react()],
});
