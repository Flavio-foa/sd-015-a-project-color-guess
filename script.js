const balls = document.getElementsByClassName('ball');
const paragrafo = document.getElementById('rgb-color');
const resposta = document.getElementById('answer');
const botao = document.getElementById('reset-game');

function gerandoRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

const randomIndex = Math.floor(Math.random() * 7);

function escolherCor(event) {
  if (event.target.style.backgroundColor === paragrafo.innerText) {
    resposta.innerText = 'Acertou!';
  } else {
    resposta.innerText = 'Errou! Tente novamente';
  }
}

function corAleatoria() {
  paragrafo.innerText = gerandoRGB();
}

function colocaCor() {
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
  corAleatoria();
  colocaCor();
  resposta.innerText = 'Escolha uma cor: ';
}

botao.addEventListener('click', reiniciar);

corAleatoria();
colocaCor();
