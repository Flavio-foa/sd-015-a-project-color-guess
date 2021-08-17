const paragraph = document.getElementById('rgb-color');
paragraph.innerHTML = '(168, 34, 1)';

function generateRGBColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

document.querySelector('.ball').style.backgroundColor = 'black'

window.onload = function generateColors() {
  const balls = document.querySelectorAll('.ball');
  balls.forEach(element => {
    element.style.backgroundColor = generateRGBColor();
  });
};
