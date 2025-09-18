iconst CACHE_NAME = "spelling-coach-cache-v1";
const FILES_TO_CACHE = [
  "/spelling-coach/",
  "/spelling-coach/index.html",
  "/spelling-coach/manifest.json",
  "/spelling-coach/icon-192.png",
  "/spelling-coach/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

