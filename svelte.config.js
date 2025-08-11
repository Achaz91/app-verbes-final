import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        // On utilise l'adaptateur automatique pour une compatibilité parfaite avec Vercel
        adapter: adapter()
    }
};

export default config;