var cacheName = 'claris-design';
var filesToCache = [
    './',
    './ressources/font/Roboto-Light.ttf',
    './ressources/images/arrow.png',
    './ressources/images/bg.png',
    './ressources/images/bouton-menu-n.png',
    './ressources/images/bouton-menu.png',
    './ressources/images/logo-n.png',
    './portfolio/ressources/images/logoCD.png',
    './portfolio/ressources/images/menu-apropos-n.png',
    './portfolio/ressources/images/menu-apropos.png',
    './portfolio/ressources/images/menu-contact-n.png',
    './portfolio/ressources/images/menu-contact.png',
    './portfolio/ressources/images/menu-interfaces-n.png',
    './portfolio/ressources/images/menu-interfaces.png',
    './portfolio/ressources/images/menu-logo-n.png',
    './portfolio/ressources/images/menu-logo.png',
    './portfolio/index.html',
    './portfolio/images.html',
    './portfolio/style.css',
    './portfolio/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        }).catch(console.error)
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        }).catch(console.error)
    );
});