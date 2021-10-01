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

function acertando() {
  numero += 3;
  placar.innerHTML = numero;
}

function corCorreta() {
  const randomIndex = Math.floor(Math.random() * (balls.length + 1));
  paragrafo.textContent = balls[randomIndex].style.backgroundColor;
}

function colocaCor() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = gerandoRGB();
  }
  corCorreta();
}

function reiniciar() {
  colocaCor();
  resposta.innerText = 'Escolha uma cor: ';
}

function escolherCor(event) {
  if (event.target.style.backgroundColor === paragrafo.innerText) {
    resposta.innerText = 'Acertou!';
    acertando();
    setTimeout(() => {
      reiniciar();
    }, 1500);
  } else {
    resposta.innerText = 'Errou! Tente novamente';
  }
}

for (let index = 0; index < balls.length; index += 1) {
  balls[index].addEventListener('click', escolherCor);
}

function resetandoGame() {
  numero = 0;
  placar.innerHTML = numero;
}

botaoAgain.addEventListener('click', reiniciar);
botaoReset.addEventListener('click', resetandoGame);

colocaCor();
