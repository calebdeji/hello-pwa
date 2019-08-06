/**
 * Used to create an offline cache in the browser
 */

const cacheName = "hellow-pwa";

/**
 * List of the files that needs to be cached
 */

let filesCache = ['/', '/index.html', '/css/app.css', '/js/app.js'];
/**
 * To start the service worker and cache all of the app's content
 */
self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(cacheName).then((cache) => {
        return cache.addAll(filesCache);
    }));
});

/**
 * Serve cache content when offline
 */
self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request).then((response) => {
        return response || fetch(event.request);
    }))
})