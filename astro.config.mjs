import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://KevinNunez-dev.github.io',
  base: '/rpt-clinic-landing',
  output: 'static',
  build: {
    assets: '_astro'
  }
});
