const rgbColorText = document.getElementById('rgb-color');

function createRGBcolorText() {
  rgbColorText.innerText = `(${
    (Math.random() * 256).toFixed(0)}, ${
    (Math.random() * 256).toFixed(0)}, ${
    (Math.random() * 256).toFixed(0)})`;
}

createRGBcolorText();
