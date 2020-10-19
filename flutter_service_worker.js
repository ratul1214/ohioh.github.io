
var CACHE_STATIC_NAME = 'static-v0';
var CACHE_DYNAMIC_NAME = 'dynamic-v0';

self.addEventListener('install', function(event) {
  console.log('[OHIOH]: Installing ServiceWorker...',event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME)
      .then(function(cache) {
        console.log('[OHIOH]:👍 Precaching App Shell');
        cache.addAll([
          '/',
          '/index.html',
          '/main.dart',
          '/offline.html'
        ]);
      })
  )
})


self.addEventListener('activate', function(event) {
  console.log('[OHIOH]:👍 ServiceWorker activated.',event);
  event.waitUntil(
    caches.keys()
      .then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.log('[OHIOH]:👍 Removing old cache.', key);
            return caches.delete(key);
          }
        }));
      })
  );
  // stabilize the sw
  return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    }),
  );
});

