function numberRandomizer(times) {
  let randomNumbers = [];
  for (let index = 0; index < times; index +=1) {
  randomNumbers.push(Math.trunc(Math.random()*256));

  }
  return randomNumbers;
}

function convertToString(rgbInfo) {
let string =  '(' + rgbInfo[0] + ', ' + rgbInfo[1] + ', ' + rgbInfo[2] + ')';
return string;
}

const color = document.querySelector('#rgb-color');
let rbgInfo = numberRandomizer(3);
let rightColorString = convertToString(rbgInfo);
color.innerHTML = rightColorString;

let ballsContainer = document.querySelector('#balls-container');
for (let index = 0; index < 6; index += 1) {
  let ball = document.createElement('div');
  ball.style.borderRadius = '50%';
  ball.style.padding = '20px';
  ball.style.border = '2px solid black';
  ball.style.display = 'inline-block';
  ball.style.margin = '3px';
  ball.className = 'ball';
  ballsContainer.appendChild(ball);
}

let rightColorRandomizer = Math.trunc(Math.random()*6);
ballsContainer.children[rightColorRandomizer].style.backgroundColor = 'rgb' + convertToString(rbgInfo);

for (let index = 0; index < 6; index += 1) {
  if(ballsContainer.children[index].style.backgroundColor === '') {
    let colorDetails = numberRandomizer(3);
    let wrongColorsString = convertToString(colorDetails);
    ballsContainer.children[index].style.backgroundColor = 'rgb' + wrongColorsString;
  }
}
const answer = document.querySelector('#answer');
for (let index = 0; index < 6; index +=1) {
  ballsContainer.children[index].addEventListener('click' , () => {
    if(ballsContainer.children[index].style.backgroundColor === 'rgb' + rightColorString) {
      answer.innerHTML = 'Acertou!';
      answer.style.backgroundColor = 'green';
    }
    else {
      answer.innerHTML = 'Errou! Tente novamente!';
      answer.style.backgroundColor = 'red';
    }
  });
}
