const guessColor = document.getElementById('rgb-color');

function randomRGBGenerator() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  guessColor.innerHTML = `(${r}, ${g}, ${b})`;
}

randomRGBGenerator();
