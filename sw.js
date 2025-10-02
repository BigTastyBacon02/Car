const CACHE='v8ev-v5';
const ASSETS=['./','./index.html','./manifest.webmanifest','./assets/transam.png','./assets/fiat.png','./assets/bg.png','./assets/arrow-left.png','./assets/arrow-right.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch',e=>{ e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request))); });
