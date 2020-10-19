// var deferredPrompt;

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('/flutter_service_worker.js')
//     .then(function() {
//       console.log("[OHIOH]: ServiceWorker is registered.")
//     });
// }

// window.addEventListener('beforeinstallprompt', function(event) {
//   console.log('beforeinstallprompt fired');
//   event.preventDefault();
//   deferredPrompt = event;
//   return false;
// });

var deferredPrompt; //before install needed
var _beforeInstallPrompt;
var box = document.querySelector('.box');
var button = document.querySelector('button');
// function showAddToHomeScreen() { var a2hsBtn = document.querySelector(".ad2hs-prompt"); a2hsBtn.style.display = "block"; a2hsBtn.addEventListener("click", addToHomeScreen); }
//function addToHomeScreen() { var a2hsBtn = document.querySelector(".ad2hs-prompt"); // hide our user interface that shows our A2HS button a2hsBtn.style.display = 'none'; // Show the prompt deferredPrompt.prompt(); // Wait for the user to respond to the prompt deferredPrompt.userChoice .then(function(choiceResult){ if (choiceResult.outcome === 'accepted') { console.log('User accepted the A2HS prompt'); } else { console.log('User dismissed the A2HS prompt'); } deferredPrompt = null; }); }

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('/flutter_service_worker.js')
//     .then(function() {
//       console.log("[OHIOH]: ServiceWorker is registered.")
//     });
// }


function beforeInstallPrompt( evt ) {
  evt.preventDefault(); _beforeInstallPrompt = evt;
  return _beforeInstallPrompt.prompt()
  .then( function ( evt ) {
  // Wait for the user to respond to the prompt
  return _beforeInstallPrompt.userChoice; } )
   .then( function ( choiceResult ) { //do stuff here
  } )
  .catch( function ( err ) { if ( err.message.indexOf( "user gesture" ) > -1 ) {
  //recycle, but make sure there is a user gesture involved
  } else if ( err.message.indexOf( "The app is already installed" ) > -1 ) {
  //the app is installed, no need to prompt, but you may need to log or update state values
  } else {
  return err;
  }
  });
  }





// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('/flutter_service_worker.js');
//   });
//   console.log('[OHIOH]:Service Worker registered.');
// }

if('serviceWorker' in navigator) {
    // Register the service worker if ('serviceWorker' in navigator) {   3
  window.addEventListener('load', function() {
     navigator.serviceWorker.register('/flutter_service_worker.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
}).catch(function(err) {                                             
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
    });
  }; 
};

if ( "onbeforeinstallprompt" in window ) {
  window.addEventListener( "beforeinstallprompt", beforeInstallPrompt );
  }



// btnAdd.addEventListener('click', (e) => {
//   // hide our user interface that shows our A2HS button
//   btnAdd.style.display = 'none';
//   // Show the prompt
//   deferredPrompt.prompt();
//   // Wait for the user to respond to the prompt
//   deferredPrompt.userChoice
//     .then((choiceResult) => {
//       if (choiceResult.outcome === 'accepted') {
//         console.log('User accepted the A2HS prompt');
//       } else {
//         console.log('User dismissed the A2HS prompt');
//       }
//       deferredPrompt = null;
//     });
// });


// window.addEventListener('beforeinstallprompt', function (event) {
//   console.log('[OHIOH]:👍 Prepaired to install...',event);
//     // Prevent the mini-infobar from appearing on mobile
//     // Prevent Chrome 67 and earlier from automatically showing the prompt
//   //event.preventDefault();
//     // Stash the event so it can be triggered later.
//   //window.deferredPrompt = event;
//     // Update UI notify the user they can install the PWA
//   showAddToHomeScreen();
//   // Remove the 'hidden' class from the install button container
//   //divInstall.classList.toggle('hidden', false);
//   btnAdd.style.display = 'block';
//   });


window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
});
