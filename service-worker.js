var cacheName = 'pp-pwa';
var filesToCache = [
    '/',
    '/index.html',
    '/css/common.css',
    '/css/popup.css',
    '/css/style.css',
    '/html/effect0.html',
    '/html/effect1.html',
    '/html/effect2.html',
    '/html/effect3.html',
    '/js/main.js' 
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(filesToCache);
      })
    );
    self.skipWaiting();
  });
  
  /* Serve cached content when offline */
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
