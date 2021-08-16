let ISRGBHASH = false;

function generateRandomColor() {
  const rgbColor = [];

  function generateRandomNumber() {
    return Math.floor(Math.random() * 255);
  }
  for (let i = 0; i < 3; i += 1) {
    const num = generateRandomNumber();
    rgbColor.push(num);
  }
  return rgbColor;
}

function createRGBParagraph() {
  const nums = generateRandomColor();
  const paragraph = document.createElement('p');

  paragraph.id = 'rgb-color';
  paragraph.innerHTML = `(${nums})`;
  document.querySelector('main').appendChild(paragraph);
  return nums;
}

const rgbHash = createRGBParagraph();

function validateOptions() {
  if (!ISRGBHASH) {
    const randomIndex = Math.floor(Math.random() * 6);
    const allOptions = document.querySelectorAll('.ball');

    allOptions[randomIndex].style.backgroundColor = `rgb(${rgbHash})`;
  }
}

function createOptionColors() {
  const listOption = document.createElement('ul');

  document.querySelector('main').appendChild(listOption);
  for (let i = 0; i < 6; i += 1) {
    const itemOptionContainer = document.createElement('div');
    const itemOption = document.createElement('li');
    const rgbNum = generateRandomColor();

    if (rgbNum === rgbHash) ISRGBHASH = true;
    itemOptionContainer.className = 'ball';
    itemOptionContainer.style.backgroundColor = `rgb(${rgbNum})`;
    listOption.appendChild(itemOptionContainer);
    itemOptionContainer.appendChild(itemOption);
  }
  validateOptions();
}

function createParagraphText() {
  const newParagraph = document.createElement('p');

  newParagraph.innerHTML = 'Escolha uma cor';
  newParagraph.id = 'answer';

  document.querySelector('main').appendChild(newParagraph);
}

function validateGuess() {
  const optionsList = document.querySelector('ul');

  optionsList.addEventListener('click', (event) => {
    const guessBackground = event.target.style.backgroundColor;

    if (guessBackground === `rgb(${rgbHash[0]}, ${rgbHash[1]}, ${rgbHash[2]})`) {
      document.getElementById('answer').innerHTML = 'Acertou!';
    } else {
      document.getElementById('answer').innerHTML = 'Errou! Tente novamente!';
    }
  });
}

createOptionColors();
createParagraphText();
validateGuess();
