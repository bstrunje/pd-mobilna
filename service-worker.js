// Naziv cache-a
const CACHE_NAME = 'pd-mobilna-v1';

// Datoteke koje ćemo spremiti u cache
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

// Instalacija service workera
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Dohvaćanje sadržaja
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - vraćamo odgovor
        if (response) {
          return response;
        }
        
        // Ako nije u cache-u, dohvaćamo s mreže
        return fetch(event.request);
      }
    )
  );
});
