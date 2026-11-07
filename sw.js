// Offline support for the static service-navigation template.
// Only the generic offline page, manifest, and icons are cached.
const CACHE = 'service-navigation-template-v1';
const BASE = new URL('./', self.location);
const PRECACHE = ['offline.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png']
  .map(function(path){ return new URL(path, BASE).pathname; });

self.addEventListener('install', function(event){
  event.waitUntil(caches.open(CACHE).then(function(cache){return cache.addAll(PRECACHE);}).then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate', function(event){
  event.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));}).then(function(){return self.clients.claim();}));
});
self.addEventListener('fetch', function(event){
  var req=event.request;
  if(req.method!=='GET')return;
  var url=new URL(req.url);
  if(url.origin!==self.location.origin)return;
  if(url.pathname.indexOf('/api/')===0)return;
  if(req.mode==='navigate'){
    event.respondWith(fetch(req).catch(function(){return caches.match(new URL('offline.html',BASE).pathname);}));
    return;
  }
  if(PRECACHE.indexOf(url.pathname)!==-1){
    event.respondWith(caches.match(req).then(function(hit){return hit||fetch(req);}));
  }
});
