// gera um número entre o min e o max
function generateNumber(min, max) {
  // ref: http://devfuria.com.br/javascript/numeros-aleatorios/
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
  const r = Math.floor(Math.random() * (max - min) + min);
  const g = Math.floor(Math.random() * (max - min) + min);
  const b = Math.floor(Math.random() * (max - min) + min);
  return `(${r}, ${g}, ${b})`;
}

const text = document.getElementById('rgb-color');
text.innerText = generateNumber(0, 256);

const board = document.getElementById('balls-board');
function createColorBall() {
  for (let index = 1; index <= 6; index += 1) {
    const balls = document.createElement('div');
    balls.className = 'ball';
    board.appendChild(balls);
  }
}

createColorBall();

function generateBallsColor() {
  const balls = document.getElementsByClassName('ball');
  const correctBall = Math.floor(Math.random() * 5);
  console.log(correctBall);
  // definida a posição da bola da resposta correta
  for (let index = 0; index < balls.length; index += 1) {
    if (index === correctBall) {
      balls[index].style.backgroundColor = `rgb${text.innerHTML}`;
      console.log(`rgb${text.innerHTML}`);
    } else {
      balls[index].style.backgroundColor = `rgb${generateNumber(0, 256)}`;
      console.log(`rgb${generateNumber(0, 256)}`);
    }
  }
}

generateBallsColor();

/* const newGameButton = document.getElementById('reset-game');
newGameButton.addEventListener('click', generateBallsColor);
 */