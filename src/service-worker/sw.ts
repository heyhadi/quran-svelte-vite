/// <reference lib="webworker" />
declare const self: ServiceWorkerGlobalScope;

interface PeriodicBackgroundSyncEvent extends ExtendableEvent {
  tag: string;
}

import {ExpirationPlugin} from 'workbox-expiration';
import {createHandlerBoundToURL, precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';

// import {UPDATE_CHECK} from '../constants';

precacheAndRoute(self.__WB_MANIFEST || []);

registerRoute(
  ({request}) => request.mode === 'navigate',
  createHandlerBoundToURL('/index.html'),
);

registerRoute(
  ({url}) => url.origin === 'https://i.ytimg.com',
  new StaleWhileRevalidate({
    cacheName: 'yt-thumbnails',
    plugins: [new ExpirationPlugin({maxEntries: 50})],
  }),
);

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

self.addEventListener('notificationclick', (event) => {
  event.waitUntil(self.clients.openWindow(event.notification.tag));
  event.notification.close();
});
