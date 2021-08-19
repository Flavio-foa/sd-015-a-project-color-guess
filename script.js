const paragrafo = document.createElement('p');
const rgbPrincipal = document.getElementById('rgb-principal');
function gerarCor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

paragrafo.innerHTML = gerarCor();
paragrafo.id = 'rgb-color';

rgbPrincipal.appendChild(paragrafo);