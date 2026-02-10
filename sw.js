const CACHE_NAME = 'eggshot-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './images/logo192.png',
  './images/logo512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});