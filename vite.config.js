import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
            manifest: {
                name: 'CogNivo — Dignified Memory Care',
                short_name: 'CogNivo',
                description: 'Dignified cognitive gaming, memory assistance and therapeutic care for dementia patients',
                theme_color: '#0F172A',
                background_color: '#0F172A',
                display: 'standalone',
                orientation: 'portrait-primary',
                start_url: '/',
                icons: [
                    { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
                    { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
                ]
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,webp,json}'],
                maximumFileSizeToCacheInBytes: 25 * 1024 * 1024,
                navigateFallback: '/index.html',
                navigateFallbackDenylist: [/^\/\.netlify/],
                runtimeCaching: [
                    {
                        urlPattern: /\.(?:mp3|ogg|wav)$/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'meditation-audio-cache',
                            expiration: {
                                maxEntries: 20,
                                maxAgeSeconds: 60 * 60 * 24 * 30
                            },
                            rangeRequests: true
                        }
                    },
                    {
                        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: { cacheName: 'google-fonts-cache', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } }
                    },
                    {
                        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: { cacheName: 'gstatic-fonts-cache', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } }
                    }
                ]
            }
        })
    ],
    resolve: {
        alias: { '@': '/src' }
    }
});
