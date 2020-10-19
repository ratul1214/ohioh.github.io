// https://medium.com/@gerybbg/web-bluetooth-by-example-6d200fa9a3ed


const connectButton = document.getElementById('connectButton');
const disconnectButton =
                   document.getElementById('disconnectButton');
const colourPicker = document.getElementById('colourPicker');
const colourButton = document.getElementById('colourButton');
const connect = document.getElementById('connect');
const deviceHeartbeat = document.getElementById('deviceHeartbeat');


const primaryServiceUuid = '12345678-1234-5678-1234-56789abcdef0';
const receiveCharUuid = '12345678-1234-5678-1234-56789abcdef1';
const sendCharUuid = '12345678-1234-5678-1234-56789abcdef3';

button.addEventListener('pointerup', function(event) {
  // Call navigator.bluetooth.requestDevice
});


let device, sendCharacteristic, receiveCharacteristic;
connectButton.onclick = async () => {
  device = await navigator.bluetooth
             .requestDevice({
                filters: [{
                  services: [primaryServiceUuid]
                }]
             });
  const server = await device.gatt.connect();
  const service =
           await server.getPrimaryService(primaryServiceUuid);
  receiveCharacteristic =
           await service.getCharacteristic(receiveCharUuid);
  sendCharacteristic =
           await service.getCharacteristic(sendCharUuid);

  device.ongattserverdisconnected = disconnect;
  connected.style.display = 'block';
  connectButton.style.display = 'none';
  disconnectButton.style.display = 'initial';
};

const disconnect = () => {
  device = null;
  receiveCharacteristic = null;
  sendCharacteristic = null;
  connected.style.display = 'none';
  connectButton.style.display = 'initial';
  disconnectButton.style.display = 'none';
};

disconnectButton.onclick = async () => {
  await device.gatt.disconnect();
  disconnect();
};
