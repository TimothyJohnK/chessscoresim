// Chess.com semantics
// let score = document.getElementsByClassName('evaluation-bar-score');

let score = document.getElementById('scorebar').textContent;
const button = document.getElementById('button');

const numberMaker = function (max, min) {
  return (Math.random() * (max - min) + min).toFixed(2);
};

button.addEventListener('click', function () {
  console.log('click firing');
  document.getElementById('scorebar').textContent = numberMaker(0, 10);
  console.log('working', scorebar.innerText);
});

function testScore() {
  console.log(score[0].innerText);
}
