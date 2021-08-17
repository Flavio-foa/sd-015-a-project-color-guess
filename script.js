/* Gera cor a ser adivinhada */

const guessText = document.getElementById('rgb-color');

function generateRGBColor() {
  let rgbColor = [];
  for (let idx = 0; idx < 3; idx += 1) {
    const rgbNum = Math.floor(Math.random() * 255);
    rgbColor.push(rgbNum);
  }

  rgbColor = `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;

  return rgbColor;
}

guessText.innerText = generateRGBColor();

/* Gera os círculos de cores possíveis */

const ballGuessContainer = document.getElementById('ball-guess-container');

function createGuessBalls() {
  const rightBallPosition = Math.floor(Math.random() * 5);

  for (let idx = 0; idx < 6; idx += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';

    if (idx === rightBallPosition) {
      ball.style.backgroundColor = guessText.innerText;
    } else {
      ball.style.backgroundColor = generateRGBColor();
    }
    ballGuessContainer.appendChild(ball);
  }
}

createGuessBalls();
