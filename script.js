const balls = document.getElementsByClassName('ball');
const paragrafo = document.getElementById('rgb-color');
const resposta = document.getElementById('answer');
const botaoAgain = document.getElementById('reset-game');
const botaoReset = document.getElementById('jogando-de-novo');
const placar = document.getElementById('score');

function gerandoRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

let numero = 0;
function acertando(event) {
  if (event.target.style.backgroundColor === paragrafo.innerText) {
    numero += 3;
  }
  placar.innerHTML = numero;
}

function escolherCor(event) {
  if (event.target.style.backgroundColor === paragrafo.innerText) {
    resposta.innerText = 'Acertou!';
    acertando(event);
  } else {
    resposta.innerText = 'Errou! Tente novamente';
  }
}

function rgbExibido() {
  paragrafo.innerText = gerandoRGB();
}

function colocaCor() {
  const randomIndex = Math.floor(Math.random() * 7);
  for (let index = 0; index < balls.length; index += 1) {
    if (index === randomIndex) {
      balls[index].style.backgroundColor = paragrafo.innerText;
    } else {
      const corAleatoria = gerandoRGB();
      balls[index].style.backgroundColor = corAleatoria;
    }
    balls[index].addEventListener('click', escolherCor);
  }
}

function reiniciar() {
  rgbExibido();
  colocaCor();
  resposta.innerText = 'Escolha uma cor: ';
}

botaoAgain.addEventListener('click', reiniciar);

rgbExibido();
colocaCor();
