if ('serviceWorker' in navigator) {
  setTimeout(() => navigator.serviceWorker.register('service-worker.js'), 3000);
}
