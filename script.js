const pColor = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');
const rightAnswer = parseInt(Math.random() * 6, 10);
const ballsContainer = document.getElementById('balls-container');
const reset = document.querySelector('#reset-game');

function generateRGB() {
  let rgb = 'rgb(';
  for (let i = 0; i < 3; i += 1) {
    if (i === 2) {
      const rdmNumber = parseInt(Math.random() * 257, 10);
      rgb += `${rdmNumber})`;
    } else {
      const rdmNumber = parseInt(Math.random() * 257, 10);
      rgb += `${rdmNumber}, `;
    }
  }
  return rgb;
}

function start() {
  for (let i = 0; i < balls.length; i += 1) {
    if (rightAnswer === i) {
      const rgbValue = generateRGB();
      balls[i].style.backgroundColor = rgbValue;
      pColor.innerText = rgbValue;
      balls[i].id = 'answer';
      balls[i].innerText = 'Escolha uma cor';
    } else {
      balls[i].style.backgroundColor = generateRGB();
      balls[i].innerText = 'Escolha uma cor';
    }
  }
}

start();

const rightBall = document.querySelector('#answer');

function checkAnswer(e) {
  const event = e;
  const rightBallStyle = getComputedStyle(rightBall);
  const style = getComputedStyle(event.target);
  if (style.backgroundColor === rightBallStyle.backgroundColor) {
    rightBall.innerText = 'Acertou!';
  } else {
    rightBall.innerText = 'Errou! Tente novamente!';
  }
}

ballsContainer.addEventListener('click', checkAnswer);

reset.addEventListener('click', start);
