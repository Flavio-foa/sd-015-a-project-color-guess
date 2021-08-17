// gera um número entre o min e o max
function generateNumber(min, max) {
  // ref: http://devfuria.com.br/javascript/numeros-aleatorios/
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
  const r = Math.floor(Math.random() * (max - min) + min);
  const g = Math.floor(Math.random() * (max - min) + min);
  const b = Math.floor(Math.random() * (max - min) + min);
  return `(${r}, ${g}, ${b})`;
}

function generateColor() {
  const text = document.getElementById('rgb-color');
  const colorToGuess = document.createElement('p');
  colorToGuess.className = 'color';
  colorToGuess.innerHTML = generateNumber(0, 256);
  text.appendChild(colorToGuess);
}

generateColor();
