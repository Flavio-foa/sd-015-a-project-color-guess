const rgbTxt = document.getElementById('rgb-color');
const balls = document.querySelectorAll('.ball');

function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `(${red}, ${green}, ${blue})`;
}

rgbTxt.innerText = randomColor();

for (let i = 0; i < balls.length; i += 1) {
  balls[i].style.backgroundColor = `rgb${randomColor()}`;
}
