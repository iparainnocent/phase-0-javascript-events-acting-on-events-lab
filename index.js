// Your code here
let dodgerElement = document.getElementById('dodger');
let dodgerLeftEdge = 0;

function moveDodgerLeft() {
  dodgerLeftEdge -= 10;
  setDodgerPosition();
}

function moveDodgerRight() {
  dodgerLeftEdge += 10;
  setDodgerPosition();
}

function setDodgerPosition() {
  dodgerElement.style.left = dodgerLeftEdge + 'px';
}