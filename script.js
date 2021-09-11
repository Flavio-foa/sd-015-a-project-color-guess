const paragraph = document.getElementById('rgb-color');
const message = document.getElementById('answer');

function generateRGBColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

const balls = document.querySelectorAll('.ball');

function checkColor(event) {
  const color = event.target;
  const scoreParagraph = document.getElementById('score');
  let score = parseInt(scoreParagraph.innerText.match(/\d+/).join(), 10);
  if (color.id === 'correct') {
    message.innerText = 'Acertou! Jogue novamente.';
    score += 3;
    scoreParagraph.innerText = `Pontuação: ${score}`;
    color.removeAttribute('id');
    balls.forEach((ball) => ball.removeEventListener('click', checkColor));
  } else {
    message.innerText = 'Errou! Tente novamente!';
  }
}

function init() {
  balls.forEach((element) => {
    const array = element;
    array.style.backgroundColor = generateRGBColor();
    array.addEventListener('click', checkColor);
  });
  const correctBall = balls[Math.floor(Math.random() * 6)];
  correctBall.id = 'correct';
  const correctColor = correctBall.style.backgroundColor;
  const arrayRGB = correctColor.match(/\d+/g);
  paragraph.innerText = `(${arrayRGB[0]}, ${arrayRGB[1]}, ${arrayRGB[2]})`;
}

window.onload = () => init();

function reset() {
  init();
  message.innerHTML = 'Escolha uma cor';
}

const resetBtn = document.getElementById('reset-game');
resetBtn.addEventListener('click', reset);
