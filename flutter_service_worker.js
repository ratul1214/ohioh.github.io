const staticCacheName = 'OHIOH-static-v1';
var dynamicCacheName = 'OHIOH-dynamic-v1';

const filesToCache = [
  '/',
  'index.html',
];


self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});


self.addEventListener('activate', event => {
  console.log('Activating new service worker...');

  const cacheWhitelist = [staticCacheName];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)
        .then(response => {
          if (response.status === 404) {
            return caches.match('pages/404.html');
          }
          return caches.open(staticCacheName)
            .then(cache => {
              cache.put(event.request.url, response.clone());
              return response;
            });
        });
    }).catch(error => {
      console.log('Error, ', error);
      return caches.match('pages/offline.html');
    })
  );
});

self.addEventListener('notificationclose', event => {
  const notification = event.notification;
  const primaryKey = notification.data.primaryKey;

  console.log('Closed notification: ' + primaryKey);
});
