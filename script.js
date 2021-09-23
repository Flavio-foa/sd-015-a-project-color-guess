function createRandomColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `(${r.toFixed(0)}, ${g.toFixed(0)}, ${b.toFixed(0)})`;
}

window.onload = () => {
  const toGuess = document.createElement('p');
  toGuess.innerText = createRandomColor();
  toGuess.id = 'rgb-color';
  document.querySelector('body').appendChild(toGuess);
  for (let i = 0; i < 6; i += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.backgroundColor = `rgb${createRandomColor()}`;
    document.querySelector('body').appendChild(ball);
  }
};
