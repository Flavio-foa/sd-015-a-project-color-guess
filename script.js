function randomNumber(max) {
  return Math.floor(Math.random() * (max + 1))
}

function randomColor() {
  return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`
}

function generateColors() {
  const instruction = document.getElementById('answer');
  instruction.innerText = 'Escolha uma cor'
  const getBalls = document.getElementsByClassName('ball');
  const getSpan = document.getElementById('rgb-color');
  const balls = Array.from(getBalls);

  balls[randomNumber(5)].id = 'correct';

  const correct = document.getElementById('correct');

  balls.forEach(ball => {
    ball.style.backgroundColor = randomColor();
    ball.addEventListener('click', checkAnswer);
  });

  getSpan.innerText = correct.style.backgroundColor;
}

generateColors();

function checkAnswer({ target }) {
  const selected = document.querySelector('.selected')
  if (selected) { selected.classList.remove('selected')}
  const instruction = document.getElementById('answer');
  target.classList.add('selected');
  (target.id === 'correct') ? instruction.innerText = 'Acertou! Novas cores!' : instruction.innerText = 'Errou! Tente novamente'
}

const reset = document.getElementById('reset-game');
reset.addEventListener('click', generateColors);
