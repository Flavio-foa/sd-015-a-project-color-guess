const balls = document.getElementsByClassName('ball');

function generateRandomColors() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function colorizeBalls() {
  for (let i = 0; i < balls.length; i += 1) {
    const ball = balls[i];
    ball.style.backgroundColor = generateRandomColors();
  }
}

colorizeBalls();
