/* Gera cor a ser adivinhada */

const guessText = document.getElementById('rgb-color');

function generateRGBColor() {
  let rgbColor = [];
  for (let idx = 0; idx < 3; idx += 1) {
    const rgbNum = Math.floor(Math.random() * 255);
    rgbColor.push(rgbNum);
  }

  rgbColor = `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;

  return rgbColor;
}

guessText.innerText = generateRGBColor();
