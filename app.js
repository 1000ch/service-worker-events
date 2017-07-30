const state = document.querySelector('#state');
const loading = document.querySelector('#loading');

state.textContent = 'Installing Service Worker...';
loading.hidden = false;

navigator.serviceWorker.ready.then(() => {
  state.textContent = 'Activating Service Worker...';
  loading.hidden = false;

  return navigator.serviceWorker.controller || new Promise(resolve => {
    navigator.serviceWorker.addEventListener('controllerchange', resolve);
  });
}).then(() => {
  state.textContent = 'Installed and Activated.';
  loading.hidden = true;
});

navigator.serviceWorker.register('service-worker.js', {
  scope: location.pathname
});
