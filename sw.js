(function () {
  const CACHE_NAME = 'PWA-INTRO-V1'
  const CACHE_FILE_NAMES = [
    '.',
    '/pages/page2.html',
    '/pages/page3.html',
    '/pages/page1.html',
    '/styles.css',
    '/index.html',
    '/images/icon-384x384.png',
    '/images/icon-256x256.png',
    '/images/meme2.png',
    '/images/meme0.jpg',
    '/images/meme3.jpg',
    '/images/icon-192x192.png',
    '/images/meme1.jpeg',
    '/images/icon-128x128.png',
    '/images/icon-512x512.png',
  ] // Add the assets you want to cache here

  self.addEventListener('install', function(event) {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          return cache.addAll(CACHE_FILE_NAMES);
        })
    );
  });

  self.addEventListener('fetch', function(event) {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', event.request.url);
        return fetch(event.request);
      }).catch(function(error) {

      })
    );
  });

})();
