
self.addEventListener('install', function(event) {
  console.log('[OHIOH]: Installing ServiceWorker...',event);
})


self.addEventListener('activate', function(event) {
  console.log('[OHIOH]:👍 ServiceWorker activated.',event);
  // stabilize the sw
  return self.clients.claim();
})

self.addEventListener('fetch', function(event) {
  console.log('[OHIOH]👍 ServiceWorker is fetching.',event);
  event.respondWith(fetch(event.request));
})
