// Chess.com semantics
// let score = document.getElementsByClassName('evaluation-bar-score');

let score = document.getElementById('scorebar').textContent;
const button = document.getElementById('button');

const scoreMaker = function (max, min) {
  return (Math.random() * (max - min) + min).toFixed(2);
};
const modifier = function () {
  let mod = Math.random() * 10;
  if (mod % 2 > 1) {
    return -1;
  } else {
    return 1;
  }
};

button.addEventListener('click', function () {
  console.log('click firing');
  document.getElementById('scorebar').textContent =
    scoreMaker(0, 10) * modifier();
  console.log('working', scorebar.innerText);
});

// function testScore() {
//   console.log(score.textContent);
// }
