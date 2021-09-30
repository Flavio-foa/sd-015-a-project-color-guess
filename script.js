function randomNumber(max) {
  return Math.floor(Math.random() * (max + 1))
}

function randomColor() {
  return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`
}

function generateColors() {
  const getBalls = document.getElementsByClassName('ball');
  const getSpan = document.getElementById('rgb-color');
  const balls = Array.from(getBalls);

  balls[randomNumber(5)].id = 'answer';

  const answer = document.getElementById('answer');

  balls.forEach(ball => {
    ball.style.backgroundColor = randomColor();
    ball.addEventListener('click', checkAnswer);
  });

  getSpan.innerText = answer.style.backgroundColor;
}

generateColors();

function checkAnswer({ target }) {
  const instruction = document.getElementById('instruction');
  target.classList.add('selected');
  (target.id === 'answer') ? instruction.innerText = 'Acertou! Novas cores!' : instruction.innerText = 'Errou! Tente novamente'
}
