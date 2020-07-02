// Chess.com semantics
// let score = document.getElementsByClassName('evaluation-bar-score');

let score = document.getElementById('scorebar').textContent;
const button = document.getElementById('button');

button.addEventListener('click', function () {
  console.log('click firing');
  document.getElementById('scorebar').textContent = Math.random();
  console.log('working', scorebar.innerText);
});

function testScore() {
  console.log(score[0].innerText);
}
