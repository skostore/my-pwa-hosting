const CACHE_NAME = 'kmp-pwa-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/composeApp.js',
  '/sql-wasm.wasm', // Critical for SQLDelight
  '/worker.js'      // Critical for SQLDelight
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
});
