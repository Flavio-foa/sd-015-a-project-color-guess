const balls = document.querySelectorAll('.ball');

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
  const colorRgb = document.getElementById('rgb-color');
  const correct = generateRandomInteger(balls.length - 1);
  for (let index = 0; index < balls.length; index += 1) {
    const color = generateColor();
    balls[index].style.backgroundColor = `rgb${color}`;
    balls[index].classList.remove('correct');
    if (index === correct) {
      colorRgb.innerHTML = color;
      balls[index].classList.add('correct');
    }
  }
}

generateRandomColors();

function chooseColor() {
  balls.forEach((ball) => {
    ball.addEventListener('click', (event) => {
      const answer = document.getElementById('answer');
      if (event.target.classList.contains('correct')) {
        answer.innerHTML = 'Acertou!';
      } else {
        answer.innerHTML = 'Errou! Tente novamente';
      }
    });
  });
}

chooseColor();
