iconst CACHE_NAME = "spelling-coach-cache-v1";
const FILES_TO_CACHE = [
  "/Spelling-Coach/",
  "/Spelling-Coach/index.html",
  "/Spelling-Coach/manifest.json",
  "/Spelling-Coach/icon-192.png",
  "/Spelling-Coach/icon-512.png"
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


