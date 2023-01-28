var cacheName = 'pp-pwa';
var filesToCache = [
    '/',
    '/css',
    '/html',
    '/img',
    '/index.html',
    '/js',
    '/manifest.json',
    '/service-worker.js',
    '/css/common.css',
    '/css/popup.css',
    '/css/style.css',
    '/html/effect0.html',
    '/html/effect1.html',
    '/html/effect2.html',
    '/html/effect3.html',
    '/img/DAELAK-16x16.png',
    '/img/DAELAK-192x192.png',
    '/img/DAELAK-32x32.png',
    '/img/DAELAK-512x512.png',
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
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  });
