const rgbTxt = document.getElementById('rgb-color');
const balls = document.querySelectorAll('ball');

function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `(${red}, ${green}, ${blue})`;
}

rgbTxt.innerText = randomColor();
