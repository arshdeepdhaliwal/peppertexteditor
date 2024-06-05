import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('fetch', (event) => {
  // Implement custom fetch event handler if needed
  //remember to come back
});
