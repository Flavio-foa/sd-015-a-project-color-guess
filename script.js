const balls = document.querySelectorAll('.ball');
const p = document.getElementById('rgb-color');
const h1 = document.querySelector('h1');
const botaoReset = document.getElementById('reset-game');
const score = document.getElementById('score');

function randomNumber() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  const rgb = `(${r}, ${g}, ${b})`;
  return rgb;
}
let rgb2 = randomNumber();
p.innerText = rgb2;

function addColor(rgb3) {
  for (let i = 0; i < balls.length; i += 1) {
    const newrgb = randomNumber();
    const aux = `rgb${newrgb}`;
    balls[i].style.backgroundColor = aux;
  }
  const oneToSIx = parseInt(Math.random() * 6, 10);
  balls[oneToSIx].style.backgroundColor = `rgb${rgb3}`;
}
addColor(rgb2);

const resposta = document.getElementById('answer');
const cores = document.querySelectorAll('.ball');

function placar() {
  score.innerText = parseInt(score.innerText, 10) + 3;
}

function click(event) {
  if (event.target.style.backgroundColor === `rgb${rgb2}`) {
    resposta.innerText = 'Acertou!';
    placar();
  } else if (event.target.style.backgroundColor !== `rgb${rgb2}`) {
    resposta.innerText = 'Errou! Tente novamente!';
  }
}
for (let i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', click);
}

function resetGame() {
  h1.innerText = 'Escolha uma cor';
  rgb2 = randomNumber();
  addColor(rgb2);
  p.innerText = rgb2;
}

botaoReset.addEventListener('click', resetGame);
