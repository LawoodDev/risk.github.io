var cacheName = 'claris-design';
var filesToCache = [
    '/',
    '/ressources/font/Roboto-Light.ttf',
    '/ressources/images/arrow.png',
    '/ressources/images/bg.png',
    '/ressources/images/bouton-menu-n.png',
    '/ressources/images/bouton-menu.png',
    '/ressources/images/logo-n.png',
    '/ressources/images/logoCD.png',
    '/ressources/images/menu-apropos-n.png',
    '/ressources/images/menu-apropos.png',
    '/ressources/images/menu-contact-n.png',
    '/ressources/images/menu-contact.png',
    '/ressources/images/menu-interfaces-n.png',
    '/ressources/images/menu-interfaces.png',
    '/ressources/images/menu-logo-n.png',
    '/ressources/images/menu-logo.png',
    '/index.html',
    '/images.html',
    '/style.css',
    '/ressources/js/main.js'
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