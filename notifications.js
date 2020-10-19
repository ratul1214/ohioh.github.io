document.addEventListener('DOMContentLoaded', init, false)
function init() {
  if ('Notification' in window) {
    Notification.requestPermission(result =>  {
      if (result === 'granted') {
        console.log('Acess granted! :)')
      } else if (result === 'denied') {
        console.log('Access denied :(')
      } else {
        console.log('Request ignored :/')
      }
    })
  } 
}
