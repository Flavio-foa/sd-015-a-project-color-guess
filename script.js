const rgbTarget = document.getElementById('rgb-color');

function generateRandomRGB() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
}

window.onload = function() {
  rgbTarget.innerHTML = generateRandomRGB();
}