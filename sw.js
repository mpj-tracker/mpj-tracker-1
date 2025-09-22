self.addEventListener('install', (event) => {
  event.waitUntil(caches.open('mpj-v1').then(c => c.addAll(['./','./index.html','./manifest.webmanifest','./mpj-logo.png'])));
  self.skipWaiting();
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((r) => r || fetch(event.request)));
});
