var deferredPrompt; //before install needed

function showAddToHomeScreen() { var a2hsBtn = document.querySelector(".ad2hs-prompt"); a2hsBtn.style.display = "block"; a2hsBtn.addEventListener("click", addToHomeScreen); }
//function addToHomeScreen() { var a2hsBtn = document.querySelector(".ad2hs-prompt"); // hide our user interface that shows our A2HS button a2hsBtn.style.display = 'none'; // Show the prompt deferredPrompt.prompt(); // Wait for the user to respond to the prompt deferredPrompt.userChoice .then(function(choiceResult){ if (choiceResult.outcome === 'accepted') { console.log('User accepted the A2HS prompt'); } else { console.log('User dismissed the A2HS prompt'); } deferredPrompt = null; }); }


window.addEventListener('beforeinstallprompt', function (event) {
  console.log('[OHIOH]:👍 Prepaired to install...',event);
    // Prevent the mini-infobar from appearing on mobile
    // Prevent Chrome 67 and earlier from automatically showing the prompt
  event.preventDefault();
    // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
    // Update UI notify the user they can install the PWA
  showAddToHomeScreen();
  // Remove the 'hidden' class from the install button container
  //divInstall.classList.toggle('hidden', false);
  btnAdd.style.display = 'block';
  });

  btnAdd.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    btnAdd.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });

window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
});

self.addEventListener('install', function(event) {
  console.log('[OHIOH]: Installing ServiceWorker...',event);
})


self.addEventListener('activate', function(event) {
  console.log('[OHIOH]:👍 ServiceWorker activated.',event);
  // stabilize the sw
  return self.clients.claim();
})

self.addEventListener('fetch', function(event) {
  console.log('[OHIOH]👍 ServiceWorker is fetching.',event);
  event.respondWith(fetch(event.request));
})
