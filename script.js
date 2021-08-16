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
  paragraph.innerHTML = `(${nums[0]},${nums[1]},${nums[2]})`;
  document.querySelector('body').appendChild(paragraph);
}

createRGBParagraph();
