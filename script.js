const paragrafo = document.createElement('div');
const rgbPrincipal = document.getElementById('rgb-principal');
const number = 6;
const container = document.querySelector('#main-container');

function gerarCor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

paragrafo.innerHTML = gerarCor();
paragrafo.id = 'rgb-color';

rgbPrincipal.appendChild(paragrafo);

for(let index = 0; index < number; index += 1){
  const circuitos = document.createElement('div');
  const cor = gerarCor();
  circuitos.className = 'ball';
  circuitos.innerHTML = cor;
  circuitos.style.backgroundColor = cor;
  circuitos.style.width = '50px'
  circuitos.style.height = '50px';
  circuitos.style.display = 'inline-block';
  circuitos.style.padding = '10px';
  circuitos.style.margin = '10px';
  circuitos.style.borderRadius = '50px';
  container.appendChild(circuitos);
}