var drone = new MiniDrone();
drone.onconnected = function() {
  alert("connected");
};
drone.ondisconnected = function(err) {
  alert("disconnected " + err);
};

var timeout;
function driveTime(vel, ms) {
  drone.drive(vel);
  if (timeout)
    clearTimeout(timeout)
  timeout = setTimeout(drone.hover, ms);
}

function rightward() {
  driveTime({x: 50}, 2000);
}
function leftward() {
  driveTime({x: -50}, 2000);
}
function forward() {
  driveTime({y: 50}, 2000);
}
function backward() {
  driveTime({y: -50}, 2000);
}
function upward() {
  driveTime({z: 50}, 2000);
}
function downward() {
  driveTime({z: -50}, 2000);
}
function turnRight() {
  driveTime({w: 50}, 2000);
}
function turnLeft() {
  driveTime({w: -50}, 2000);
}

function onLoad() {
  document.getElementById('connect').onclick = drone.connect.bind(drone, navigator.bluetooth || bleat);
  document.getElementById('disconnect').onclick = drone.disconnect;
  document.getElementById('takeoff').onclick = drone.takeOff;
  document.getElementById('land').onclick = drone.land;
  document.getElementById('hover').onclick = drone.hover;
  document.getElementById('backflip').onclick = drone.backFlip;
  document.getElementById('frontflip').onclick = drone.frontFlip;
  document.getElementById('rightflip').onclick = drone.rightFlip;
  document.getElementById('leftflip').onclick = drone.leftFlip;
  document.getElementById('emergencyland').onclick = drone.emergencyLand;
  document.getElementById('rightward').onclick = rightward;
  document.getElementById('leftward').onclick = leftward;
  document.getElementById('forward').onclick = forward;
  document.getElementById('backward').onclick = backward;
  document.getElementById('upward').onclick = upward;
  document.getElementById('downward').onclick = downward;
  document.getElementById('turnleft').onclick = turnLeft;
  document.getElementById('turnright').onclick = turnRight;
}

function onDeviceReady() {
  if (evothings && evothings.ble)
    evothings.ble.writeCharacteristic = evothings.ble.writeCharacteristicWithoutResponse;
}

function onPause() {
}

function onResume() {
}

window.addEventListener('load', onLoad, false);
document.addEventListener('deviceready', onDeviceReady, false);
document.addEventListener('pause', onPause, false);
document.addEventListener('resume', onResume, false);
