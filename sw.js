var urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/app.js',
  '/images/background.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches
      .open('myCache')
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
