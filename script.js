const guessColor = document.getElementById('rgb-color');
const colorContainer = document.getElementById('colors-container');
const numberOfOptions = 6;
let rightAnswerIndex = Math.floor(Math.random() * 5);
const answer = document.getElementById('answer');
const resetBttn = document.getElementById('reset-game');
const score = document.getElementById('score');
let scoreNumber = 0;
score.innerHTML = scoreNumber;

function randomRGBGenerator() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function addColors() {
  for (let index = 0; index < numberOfOptions; index += 1) {
    const newColorBall = document.createElement('span');
    newColorBall.className = 'ball';
    if (index === rightAnswerIndex) {
      newColorBall.style.backgroundColor = `${guessColor.innerHTML}`;
    } else {
      newColorBall.style.backgroundColor = randomRGBGenerator();
    }
    colorContainer.appendChild(newColorBall);
  }
}

function checkAnswer() {
  colorContainer.addEventListener('click', (event) => {
    if (event.target.style.backgroundColor === guessColor.innerHTML) {
      answer.innerHTML = 'Acertou!';
      scoreNumber += 3;
      score.innerHTML = scoreNumber;
    } else {
      answer.innerHTML = 'Errou! Tente novamente';
      score.innerHTML = scoreNumber;
    }
  });
}

function resetGame() {
  resetBttn.addEventListener('click', () => {
    guessColor.innerHTML = randomRGBGenerator();
    colorContainer.innerHTML = '';
    rightAnswerIndex = Math.floor(Math.random() * 5);
    addColors();
    answer.innerHTML = 'Escolha uma cor';
  });
}

guessColor.innerHTML = randomRGBGenerator();
addColors();
checkAnswer();
resetGame();
