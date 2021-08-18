function generateRandomInteger(max) {
  return Math.round(Math.random() * max);
}

function generateColor() {
  const values = [];
  for (let index = 0; index < 3; index += 1) {
    values[index] = generateRandomInteger(255);
  }
  return `(${values[0]}, ${values[1]}, ${values[2]})`;
}

function generateRandomColors() {
  const balls = document.getElementsByClassName('ball');
  const colorRgb = document.getElementById('rgb-color');
  const correct = generateRandomInteger(balls.length - 1);
  for (let index = 0; index < balls.length; index += 1) {
    const color = generateColor();
    balls[index].style.backgroundColor = `rgb${color}`;
    if (index === correct) {
      colorRgb.innerHTML = color;
    }
  }
}

generateRandomColors();
