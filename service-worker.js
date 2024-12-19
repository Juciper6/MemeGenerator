importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    workbox.routing.registerRoute(
        new RegExp('https://api.imgflip.com/get_memes'),
        new workbox.strategies.NetworkFirst()
    );
}