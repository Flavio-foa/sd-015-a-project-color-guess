const ball = '.ball';
const rgbColor = document.getElementById('rgb-color');
const answer = 'answer';
const getResetButton = document.getElementById('reset-game');
const getScore = document.getElementById('score');

function randomBgC() {
  const getBalls = document.querySelectorAll(ball);
  const aleatoryNumber = getAleatoryColor();
  for (let i = 0; i < getBalls.length; i += 1) {
      getBalls[i].addEventListener('click', answerColor);
      let randomR = Math.round(Math.random() * 255);
      let randomG = Math.round(Math.random() * 255);
      let randomB = Math.round(Math.random() * 255);
      getBalls[i].style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
      if (i === aleatoryNumber) {
          let color = getBalls[i].style.backgroundColor;
          rgbColor.style.color = color;
          rgbColor.innerHTML = color.slice(3);
      }
  }
  const getAnswer = document.getElementById(answer);
  getAnswer.innerText = 'Escolha uma cor';
}

function getAleatoryColor() { // Retorna um número aleatorio
  let aleatoryNumber = Math.floor(Math.random() * 6);
  return aleatoryNumber;
}

function answerColor (event) {
  const clicked = event.target;
  const color = clicked.style.backgroundColor;
  const colorSlice = color.slice(3);
  const rgbColortext = rgbColor.innerHTML;
  const getAnswerP = document.getElementById(answer);
  if (colorSlice === rgbColortext) {
    getAnswerP.innerHTML = 'Acertou!';
    let scoreContent = getScore.innerText;
    let splitScore = scoreContent.split(' ');
    splitScore[1] = parseInt(splitScore[1]);
    splitScore[1] += 3;
    scoreContent += splitScore[1];
    let backToText = splitScore.join(' ');
    getScore.innerText = backToText;
    console.log(getScore.innerText)
    // localStorage.setItem('score', getScore.innerText)
  } else {
    getAnswerP.innerHTML = 'Errou! Tente novamente!';
  }
}

function setResetButton() {
  // window.location.reload(); // Faz reload da página.
  randomBgC();
}

getResetButton.addEventListener('click', setResetButton);



window.onload = function () {
  randomBgC();
}
