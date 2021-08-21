const ball = '.ball';
const rgbColor = 'rgb-color';
const answer = 'answer';

function randomBgC() {
    const getBalls = document.querySelectorAll(ball);
    for (let i = 0; i < getBalls.length; i += 1) {
        getBalls[i].addEventListener('click', answerColor);
        let randomR = Math.round(Math.random() * 255);
        let randomG = Math.round(Math.random() * 255);
        let randomB = Math.round(Math.random() * 255);
        getBalls[i].style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
}

function answerColor (event) {
    const clicked = event.target;
    const color = clicked.style.backgroundColor;
    const getRgb = document.getElementById(rgbColor);
    const rgbText = `rgb${getRgb.innerHTML}`;
    const getAnswerP = document.getElementById(answer);
    console.log(color);
    console.log(rgbText);
    if (color === rgbText) {
        console.log('color= '+typeof(color));
        console.log('rgbText= '+typeof(rgbText));
        getAnswerP.innerHTML = 'Acertou!';
    } else {
        getAnswerP.innerHTML = 'Errou! Tente novamente!';
    }
}

window.onload = function () {
    randomBgC();
}
