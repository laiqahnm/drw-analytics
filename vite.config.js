import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/asosiasi-analisis.css',
                'resources/css/asosiasi-hasil.css',
                'resources/css/asosiasi-dashboard.css',
                'resources/css/asosiasi-riwayat.css',
                'resources/css/asosiasi-layout.css',
                'resources/js/app.js',
                'resources/js/asosiasi-analisis.js'
            ],
            refresh: true,
        }),
    ],
});
