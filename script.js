function randomNumber() {
let r = parseInt(Math.random() * 255);
let g = parseInt(Math.random() * 255);
let b = parseInt(Math.random() * 255);
let rgb =  `(${r}, ${g}, ${b})`
p.innerText = rgb
}

let p = document.getElementById('rgb-color')
window.onload = randomNumber()