let ISRGBHASH = false;
const rgbHash = createRGBParagraph();

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
    const itemOption = document.createElement('li');
    const rgbNum = generateRandomColor();
    if (rgbNum === rgbHash) ISRGBHASH = true;
    itemOption.className = 'ball';
    itemOption.style.backgroundColor = `rgb(${rgbNum})`;
    listOption.appendChild(itemOption);
  }
  validateOptions();
}

createOptionColors();
