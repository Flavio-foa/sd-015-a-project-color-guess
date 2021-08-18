const colorBall = document.getElementsByClassName('ball');
const corEscolhida = document.getElementById('rgb-color');
const respostaPagina = document.getElementById('answer');
const botaoReset = document.getElementById('reset-game');
const regexCor = /(\(\d{1,3}, \d{1,3}, \d{1,3}\))/g;
const indexZero = 0;

function randomNumberRGB() {
  return Math.round(Math.random() * 255);
}

function randomNumberIndex() {
  return Math.round(Math.random() * 5);
}

function randomColor() {
  let corResposta = 'rgb(';
  corResposta += randomNumberRGB();
  corResposta += ', ';
  corResposta += randomNumberRGB();
  corResposta += ', ';
  corResposta += randomNumberRGB();
  corResposta += ')';
  return corResposta;
}

function escolherBola() {
  const numero = randomNumberIndex();
  const cor = colorBall[numero].style.backgroundColor;
  const arrayCor = cor.match(regexCor);
  corEscolhida.innerText = arrayCor[indexZero];
}

function atribuirCor() {
  for (let index = 0; index < colorBall.length; index += 1) {
    colorBall[index].style.backgroundColor = randomColor();
  }
  escolherBola();
  respostaPagina.innerText = 'Escolha uma cor';
}

function checarResposta(evento) {
  const alvo = evento.target;
  const cor = alvo.style.backgroundColor;
  const arrayCor = cor.match(regexCor);
  if (arrayCor[indexZero] === corEscolhida.innerText) {
    respostaPagina.innerText = 'Acertou!';
  } else {
    respostaPagina.innerText = 'Errou! Tente novamente!';
  }
}

window.onload = function carregarPagina() {
  atribuirCor();

  for (let index = 0; index < colorBall.length; index += 1) {
    colorBall[index].addEventListener('click', checarResposta);
  }
  botaoReset.addEventListener('click', atribuirCor);
};
