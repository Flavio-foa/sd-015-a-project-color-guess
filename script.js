
function randomNumber() {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  let rgb = `(${r}, ${g}, ${b})`
  p.innerText = rgb
  addColor()
  function addColor() {
    for (let elemetos of balls) {
      let r = parseInt(Math.random() * 255);
      let g = parseInt(Math.random() * 255);
      let b = parseInt(Math.random() * 255);
      elemetos.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
    let oneToSIx = parseInt(Math.random() * 6);
    balls[oneToSIx].style.backgroundColor = "rgb" + rgb
  }
  let resposta = document.getElementById('answer')
  let cores = document.querySelectorAll('.ball')
  for (elemetos of cores) {
    elemetos.addEventListener('click', click);
  }
  function click(event) {
    if (event.target.style.backgroundColor === "rgb" + rgb) {
      resposta.innerText = 'Acertou!'
      placar()
    } else if (event.target.style.backgroundColor !== "rgb" + rgb) {
      resposta.innerText = 'Errou! Tente novamente!'
    }
  }
}



let balls = document.querySelectorAll('.ball')
let p = document.getElementById('rgb-color')
window.onload = randomNumber()


// function click(event) {
//   if (event.target.style.backgroundColor === "rgb" + rgb ) {
//     resposta.innerText = 'Acertou!'
//     placar()
//   } else if (event.target.style.backgroundColor !== rgbCompleted) {
//     resposta.innerText = 'Errou! Tente novamente!' 
//   }
// }

// let resposta = document.getElementById('answer')
// let cores = document.querySelectorAll('.ball')
// for (elemetos of cores) {
//   elemetos.addEventListener('click', click);
// }

function resetGame() {
  h1.innerText = 'Escolha uma cor'
  randomNumber()
}

let h1 = document.querySelector('h1')
let botaoReset = document.getElementById('reset-game')
botaoReset.addEventListener('click', resetGame)

function placar() {
  score.innerText = parseInt(score.innerText) + 3

}

let score = document.getElementById('score');
