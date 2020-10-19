if ('serviceWorker' in Navigator) {

  navigator.serviceWorker
  .register('/flutter_service_worker.js')
  .then(function() {
    console.log("[OHIOH]: ServiceWorker is registered.")
  });


}
