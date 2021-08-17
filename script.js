const balls = document.getElementsByClassName('ball');

function generateRandomColors() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function colorizeBalls() {
  for (let i = 0; i < balls.length; i += 1) {
    const ball = balls[i];
    ball.style.backgroundColor = generateRandomColors();
  }
}

function randomText() {
  const randomNum = Math.floor(Math.random() * 5);
  const colorText = window.getComputedStyle(balls[randomNum]).backgroundColor;
  const p = document.getElementById('rgb-color');
  p.innerHTML = colorText;
}

function scoreCounter() {
  const score = document.getElementById('score-number');
  const scoreText = score.innerHTML;
  let scoreNum = parseInt(scoreText, 10);
  scoreNum += 3;
  score.innerHTML = scoreNum;
}

function verifyAnswer(event) {
  const showAnswer = document.getElementById('answer');
  const question = document.getElementById('rgb-color').innerHTML;
  const colorClicked = event.target.style.backgroundColor;
  if (colorClicked === question) {
    showAnswer.innerHTML = 'Acertou!';
    scoreCounter();
  } else {
    showAnswer.innerHTML = 'Errou! Tente novamente';
  }
}

function addBallsListeners() {
  for (let i = 0; i < balls.length; i += 1) {
    const ball = balls[i];
    ball.addEventListener('click', verifyAnswer);
  }
}

function resetGame() {
  colorizeBalls();
  randomText();
  const p = document.getElementById('answer');
  p.innerHTML = 'Escolha uma cor';
}

function addButtonListener() {
  const button = document.getElementById('reset-game');
  button.addEventListener('click', resetGame);
}

addBallsListeners();
addButtonListener();
colorizeBalls();
randomText();
