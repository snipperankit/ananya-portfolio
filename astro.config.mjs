import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Change `site` to your real domain when you buy one.
export default defineConfig({
  site: 'https://ananya-rao-portfolio.netlify.app',
  integrations: [mdx(), sitemap()],
});
