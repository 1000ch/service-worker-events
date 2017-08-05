const sleep = ms => new Promise(resolve => {
  setTimeout(resolve, ms);
});

self.addEventListener('install', e => {
  e.waitUntil(async () => {
    await sleep(5000);
  });
});

self.addEventListener('activate', e => {
  e.waitUntil(async () => {
    await sleep(5000);
    await self.clients.claim();
  });
});
