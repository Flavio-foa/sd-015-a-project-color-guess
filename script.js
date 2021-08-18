const ballContainer = document.querySelector('#ball-container');
const rgbColor = document.querySelector('#rgb-color');
const answerText = document.querySelector('#answer');
const buttonResetGame = document.querySelector('#reset-game');
const score = document.querySelector('#score');
const tamanho = 6;

function corAleatoria() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red} , ${green} , ${blue})`;
}

function criaElementoBall() {
  const ball = document.createElement('div');
  ball.style.backgroundColor = corAleatoria();
  ball.classList.add('ball');
  return ball;
}

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
pesquisei o padstart como uma forma de dividir o rgb()
mas percebi pelo exemplo que se usar o slice, eu consigo cortar
o rgb, só dando slice(3) para tirar os 3 primeiros caracteres */

function pegaCorDoJogo() {
  const corSelecionada = Math.floor(Math.random() * tamanho);
  const elementos = document.querySelectorAll('.ball');
  const corDoElemento = elementos[corSelecionada].style.backgroundColor;
  rgbColor.textContent = corDoElemento.slice(3);// remove rgb
}

function criaNBalls() {
  do {
    ballContainer.appendChild(criaElementoBall());
  } while (ballContainer.children.length < tamanho);
  pegaCorDoJogo();
}
criaNBalls();

function jogoDasCores(event) {
  if (!event.target.classList.contains('ball')) {
    return;
  }
  const corDoEventFormatado = event.target.style.backgroundColor.slice(3);
  const corDoRgbColor = rgbColor.textContent;
  const validador = corDoEventFormatado === corDoRgbColor;
  if (validador) {
    answerText.textContent = 'Acertou!';
    if (!score.classList.contains('resetRequired')) {
      const numeroDoPlacar = parseInt(score.textContent.slice(8), 10);
      score.textContent = `Placar: ${numeroDoPlacar + 3}`;
      score.classList.toggle('resetRequired');
    }
  } else {
    answerText.textContent = 'Errou! Tente novamente!';
  }
}

ballContainer.addEventListener('click', jogoDasCores);

/*
  eu poderia ter criado uma funcao para apagar o quadro
  e quando eu apagasse eu criasse um novo, mas eu ja fiz isso
  em outro projeto e queria tentar utilizar o for pra poder
  apenas alterar o quadro ao invez de crialo novamente, não
  sei dizer se isso é mais eficiente ou não ...
 */
function resetGame() {
  answerText.textContent = 'Escolha uma cor';
  const balls = ballContainer.children;
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = corAleatoria();
  }
  score.classList.toggle('resetRequired');
  pegaCorDoJogo();
}

buttonResetGame.addEventListener('click', resetGame);
