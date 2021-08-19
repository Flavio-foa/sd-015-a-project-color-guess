const paragrafo = document.createElement('div');
const rgbPrincipal = document.getElementById('rgb-principal');
const number = 6;
const rgbContainer = document.querySelector('#rgb-container');
const btnReset = document.getElementById('reset-game');
const score = document.getElementById('score');
const resposta = document.getElementById('answer');
const resInicial = 'Escolha uma cor';

resposta.innerHTML = resInicial;
score.innerHTML = '0';

function gerarCor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

function corPrincipal(cor) {
  paragrafo.innerHTML = cor;
  paragrafo.id = 'rgb-color';

  rgbPrincipal.appendChild(paragrafo);
}

function coresAleatoria() {
  for (let index = 0; index < number; index += 1) {
    const circuitos = document.createElement('div');
    const cor = gerarCor();
    circuitos.className = 'ball';
    //  circuitos.innerHTML = cor;
    circuitos.style.backgroundColor = cor;
    circuitos.style.width = '50px';
    circuitos.style.height = '50px';
    circuitos.style.display = 'inline-block';
    circuitos.style.padding = '10px';
    circuitos.style.margin = '10px';
    circuitos.style.borderRadius = '50px';
    rgbContainer.appendChild(circuitos);
  }
  const ball = document.querySelectorAll('.ball');
  const random = Math.ceil(Math.random() * 6) - 1;
  console.log(ball[random].style.backgroundColor);
  corPrincipal(ball[random].style.backgroundColor);
}

function removeAll() {
  while (rgbContainer.firstChild) {
    rgbContainer.firstChild.remove();
  }
}

coresAleatoria();

btnReset.addEventListener('click', () => {
  removeAll();
  coresAleatoria();
  resposta.innerHTML = resInicial;
});

function comparaCor(cor) {
  if (paragrafo.innerHTML === cor) {
    return true;
  }
  return false;
}

function respostaFunction(result) {
  if (result) {
    const point = 3;
    const pointTotal = parseInt(score.innerHTML, 10);
    resposta.innerHTML = 'Acertou!';
    score.innerHTML = pointTotal + point;
    return;
  }
  resposta.innerHTML = 'Errou! Tente novamente!';
}

rgbContainer.addEventListener('click', (event) => {
  if (resposta.innerHTML === resInicial) {
    const cor = event.target.style.backgroundColor;
    const result = comparaCor(cor);
    respostaFunction(result);
  }
});
