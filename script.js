const ball = '.ball';
const rgbColor = document.getElementById('rgb-color');
const answer = 'answer';

function randomBgC() {
    const getBalls = document.querySelectorAll(ball);
    const aleatoryNumber = getAleatoryColor();
    for (let i = 0; i < getBalls.length; i += 1) {
        getBalls[i].addEventListener('click', answerColor);
        let randomR = Math.round(Math.random() * 255);
        let randomG = Math.round(Math.random() * 255);
        let randomB = Math.round(Math.random() * 255);
        getBalls[i].style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        if (i === aleatoryNumber) {
            let color = getBalls[i].style.backgroundColor;
            rgbColor.style.color = color;
            rgbColor.innerHTML = color.slice(3);
        }
    }
}

function getAleatoryColor() { // Retorna um número aleatorio
    let aleatoryNumber = Math.floor(Math.random() * 6);
    return aleatoryNumber;
}

function answerColor (event) {
    const clicked = event.target;
    const color = clicked.style.backgroundColor;
    const colorSlice = color.slice(3);
    const rgbColortext = rgbColor.innerHTML;
    const getAnswerP = document.getElementById(answer);
    if (colorSlice === rgbColortext) {
        // console.log('color= '+typeof(color));
        // console.log('rgbText= '+typeof(rgbText));
        getAnswerP.innerHTML = 'Acertou!';
    } else {
        getAnswerP.innerHTML = 'Errou! Tente novamente!';
    }
}

window.onload = function () {
    randomBgC();
}
