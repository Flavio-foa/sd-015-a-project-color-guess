//  Gerador de cor Aleatoria
function generateColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `(${r}, ${g}, ${b})`;
}

//  Constantes
const div = document.getElementById('color-container');
const p = document.getElementById('rgb-color');

//  Adicionando elementos
function addElements() {
  div.innerHTML = '';
  const escolhido = generateColor();
  p.innerHTML = escolhido;
  const random = Math.floor(Math.random() * 6);
  for (let c = 0; c < 6; c += 1) {
    if (c === random) {
      const ball = document.createElement('div');
      ball.className = 'ball selected';
      ball.style.backgroundColor = `rgb${escolhido}`;
      div.appendChild(ball);
    } else {
      const ball = document.createElement('div');
      ball.className = 'ball';
      ball.style.backgroundColor = `rgb${generateColor()}`;
      div.appendChild(ball);
    }
  }
}
addElements();

//  Mecanismo de verificação de resposta
function verification() {
  const resposta = document.getElementById('answer');
  const placar = document.getElementById('score');
  div.addEventListener('click', (e) => {
    if (e.target.className.split(' ').includes('selected')) {
      let score = Number(placar.innerHTML);
      score += 3;
      placar.innerHTML = score;
      resposta.innerHTML = 'Acertou!';
    } else {
      resposta.innerHTML = 'Errou! Tente novamente!';
    }
  });
}
verification();

//  reset game
function reset() {
  const bot = document.getElementById('reset-game');
  const res = document.getElementById('answer');
  bot.addEventListener('click', (_) => {
    res.innerHTML = 'Escolha uma cor';
    addElements();
  });
}
reset();
