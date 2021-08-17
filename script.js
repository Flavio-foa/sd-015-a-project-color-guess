const guessColor = document.getElementById('rgb-color');
const colorContainer = document.getElementById('colors-container');
const numberOfOptions = 6;
const rightAnswerIndex = Math.floor(Math.random() * 5);

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

randomRGBGenerator();
guessColor.innerHTML = randomRGBGenerator();
addColors();
