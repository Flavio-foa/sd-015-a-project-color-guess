function generateColor() {
  const values = [];
  for (let index = 0; index < 3; index += 1) {
    values[index] = Math.round(Math.random() * 255);
  }
  return `(${values[0]}, ${values[1]}, ${values[2]})`;
}

function colorToGuess() {
  const rgbColor = document.getElementById('rgb-color');
  rgbColor.innerHTML = generateColor();
}

colorToGuess();
