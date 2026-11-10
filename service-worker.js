const CACHE='cucina-modular-1';
const CORE=['./','./index.html','./css/base.css','./css/listing.css','./css/recipe.css','./js/core.js','./js/search.js','./js/collections.js','./js/listing.js','./js/recipe.js','./js/app.js','./manifest.webmanifest','./data/recipes-index.json','./data/categories.json'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match(event.request)))});
