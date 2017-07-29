const sleep = ms => new Promise(resolve => {
  setTimeout(resolve, ms);
});

self.addEventListener('install', e => {
  e.waitUntil(sleep(5000));
});

self.addEventListener('activate', e => {
  e.waitUntil(sleep(5000).then(() => self.clients.claim()));
});
