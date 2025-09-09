// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  base: '/',
  integrations: [icon()],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
        prefixDefaultLocale: false
    }
  }
});