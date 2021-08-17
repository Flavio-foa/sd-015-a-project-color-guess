const rgbTxt = document.getElementById('rgb-color');
const balls = document.querySelectorAll('.ball');
const instructions = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');

function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `(${red}, ${green}, ${blue})`;
}

rgbTxt.innerText = randomColor();

function selectRight() {
  return Math.floor(Math.random() * 6);
}

let rigthBall = selectRight();

for (let i = 0; i < balls.length; i += 1) {
  if (i !== rigthBall) {
    balls[i].style.backgroundColor = `rgb${randomColor()}`;
  } else {
    balls[i].style.backgroundColor = `rgb${rgbTxt.innerText}`;
  }
  balls[i].addEventListener('click', (ball) => {
    const rightColor = `rgb${rgbTxt.innerText}`;
    const clickedBall = ball.target.style.backgroundColor;
    if (rightColor === clickedBall) {
      instructions.innerText = 'Acertou!';
    } else {
      instructions.innerText = 'Errou! Tente novamente!';
    }
  });
}

resetButton.addEventListener('click', () => {
  rgbTxt.innerText = randomColor();
  rigthBall = selectRight();
  instructions.innerText = 'Escolha uma cor';
  for (let i = 0; i < balls.length; i += 1) {
    if (i !== rigthBall) {
      balls[i].style.backgroundColor = `rgb${randomColor()}`;
    } else {
      balls[i].style.backgroundColor = `rgb${rgbTxt.innerText}`;
    }
  }
});
