const state = document.querySelector('#state');
const sw = navigator.serviceWorker;

sw.ready.then(() => {
  state.textContent = 'Service Worker installed successfully';

  if (sw.controller) {
    return sw.controller;
  }

  return new Promise(resolve => {
    sw.addEventListener('controllerchange', resolve);
  });
}).then(() => {
  state.textContent = 'Service Worker activated successfully';
});

sw.register('service-worker.js', {
  scope: location.pathname
});
