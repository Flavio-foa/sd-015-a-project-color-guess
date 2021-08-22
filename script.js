const ball = '.ball';
const rgbColor = document.getElementById('rgb-color');
const answer = 'answer';
const getResetButton = document.getElementById('reset-game');
const getScore = document.getElementById('score');

function getAleatoryColor() { // Retorna um número aleatorio
  const aleatoryNumber = Math.floor(Math.random() * 6);
  return aleatoryNumber;
}

function answerColor(event) {
  const clicked = event.target;
  const color = clicked.style.backgroundColor;
  const colorSlice = color.slice(3);
  const rgbColortext = rgbColor.innerHTML;
  const getAnswerP = document.getElementById(answer);
  if (colorSlice === rgbColortext) {
    getAnswerP.innerHTML = 'Acertou!';
    let scoreContent = getScore.innerText;
    const splitScore = scoreContent.split(' ');
    splitScore[1] = parseInt(splitScore[1], 10);
    splitScore[1] += 3;
    scoreContent += splitScore[1];
    const backToText = splitScore.join(' ');
    getScore.innerText = backToText;
    console.log(getScore.innerText);
  } else {
    getAnswerP.innerHTML = 'Errou! Tente novamente!';
  }
}

function randomBgC() {
  const getBalls = document.querySelectorAll(ball);
  const aleatoryNumber = getAleatoryColor();
  for (let i = 0; i < getBalls.length; i += 1) {
    getBalls[i].addEventListener('click', answerColor);
    const randomR = Math.round(Math.random() * 255);
    const randomG = Math.round(Math.random() * 255);
    const randomB = Math.round(Math.random() * 255);
    getBalls[i].style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    if (i === aleatoryNumber) {
      const color = getBalls[i].style.backgroundColor;
      rgbColor.style.color = color;
      rgbColor.innerHTML = color.slice(3);
    }
  }
  const getAnswer = document.getElementById(answer);
  getAnswer.innerText = 'Escolha uma cor';
}

function setResetButton() {
  // window.location.reload(); // Faz reload da página.
  randomBgC();
}

getResetButton.addEventListener('click', setResetButton);

window.onload = function loadRandomColors() {
  randomBgC();
};
