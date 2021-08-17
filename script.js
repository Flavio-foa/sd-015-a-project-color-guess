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
  p.innerText = rgb;
  addColor();
  function addColor() {
    for (let i = 0; i < balls.length; i += 1) {
      const r = parseInt(Math.random() * 255, 10);
      const g = parseInt(Math.random() * 255, 10);
      const b = parseInt(Math.random() * 255, 10);
      balls[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    const oneToSIx = parseInt(Math.random() * 6, 10);
    balls[oneToSIx].style.backgroundColor = 'rgb' + rgb;
  }
  const resposta = document.getElementById('answer');
  const cores = document.querySelectorAll('.ball');

  function click(event) {
    if (event.target.style.backgroundColor === 'rgb' + rgb) {
      resposta.innerText = 'Acertou!';
      placar();
    } else if (event.target.style.backgroundColor !== 'rgb' + rgb) {
      resposta.innerText = 'Errou! Tente novamente!';
    }
  }
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].addEventListener('click', click);
  }
}

function resetGame() {
  h1.innerText = 'Escolha uma cor';
  randomNumber();
}

botaoReset.addEventListener('click', resetGame);

window.onload = randomNumber();

function placar() {
  score.innerText = parseInt(score.innerText, 10) + 3;
}
