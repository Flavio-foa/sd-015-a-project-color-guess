const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const scoreDiv = document.getElementById('score');
let score = 0;

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

function generateInitialConfig() {
  const colorRgb = document.getElementById('rgb-color');
  const correct = generateRandomInteger(balls.length - 1);

  answer.innerHTML = 'Escolha uma cor';

  scoreDiv.innerHTML = `Palcar: ${score}`;

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

generateInitialConfig();

function chooseColor() {
  balls.forEach((ball) => {
    ball.addEventListener('click', (event) => {
      if (event.target.classList.contains('correct')) {
        answer.innerHTML = 'Acertou!';
        score += 3;
        scoreDiv.innerHTML = `Placar ${score}`;
      } else {
        answer.innerHTML = 'Errou! Tente novamente';
      }
    });
  });
}

chooseColor();

function resetGame() {
  const resetButton = document.getElementById('reset-game');
  resetButton.addEventListener('click', () => {
    generateInitialConfig();
  });
}

resetGame();
