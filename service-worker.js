self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/css',
                '/favicon.ico',
                '/html',
                '/img',
                '/index.html',
                '/js',
                '/manifest.json',
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
                '/img/favicon-32x32.png',
                '/service-worker.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
