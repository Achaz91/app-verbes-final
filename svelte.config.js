import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            // CORRECTION : On ajoute un fallback pour les SPA
            fallback: 'index.html',
            pages: 'build',
            assets: 'build',
            precompress: false,
            strict: true
        })
    }
};

export default config;
