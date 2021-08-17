const paragraph = document.getElementById('rgb-color');
const message = document.getElementById('answer');

function generateRGBColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

function showMessage(event) {
  const color = event.target;
  if (color.id === 'correct') {
    message.innerText = 'Acertou!';
  } else {
    message.innerText = 'Errou! Tente novamente!';
  }
}

const balls = document.querySelectorAll('.ball');

window.onload = function init() {
  balls.forEach((element) => {
    const array = element;
    array.style.backgroundColor = generateRGBColor();
    array.addEventListener('click', showMessage);
  });
  const correctBall = balls[Math.floor(Math.random() * 6)];
  correctBall.id = 'correct';
  const correctColor = correctBall.style.backgroundColor;
  const arrayRGB = correctColor.match(/\d+/g);
  paragraph.innerText = `(${arrayRGB[0]}, ${arrayRGB[1]}, ${arrayRGB[2]})`;
};
