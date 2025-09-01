// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://hima2oo4.github.io',
    // base: '/dist',
    // updated build
    vite: {
        plugins: [tailwindcss()],
    },
});
