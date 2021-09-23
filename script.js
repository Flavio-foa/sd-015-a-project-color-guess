function createRandomColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `(${r.toFixed(0)}, ${g.toFixed(0)}, ${b.toFixed(0)})`;
}

const color = document.getElementById('rgb-color');

function gameEngine(event) {
  const ball = event.target;
  const result = document.getElementById('answer');
  const score = document.querySelector('#score-value');
  const scoreValue = parseInt(score.innerText, 10);
  if (ball.style.backgroundColor === `rgb${color.innerText}`) {
    result.innerText = 'Acertou!';
    score.innerText = scoreValue + 3;
  } else {
    result.innerText = 'Errou! Tente novamente!';
    score.innerText = scoreValue < 1 ? 0 : scoreValue - 1;
  }
}

function resetGame() {
  color.innerText = createRandomColor();
  document.getElementById('answer').innerText = 'Escolha uma cor';
  const balls = document.querySelectorAll('.ball');
  const n = (Math.random() * (balls.length - 1)).toFixed(0);
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = parseInt(n, 10) === i ? `rgb${color.innerText}`
      : `rgb${createRandomColor()}`;
    balls[i].addEventListener('click', gameEngine);
  }
}

window.onload = () => {
  resetGame();
};
