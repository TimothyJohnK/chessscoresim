// Chess.com semantics
// let score = document.getElementsByClassName('evaluation-bar-score');

let score = document.getElementById('scorebar');
const button = document.getElementById('button');

button.addEventListener('click', function () {
  console.log('click firing');
  score.value = '';
  score.appendChild(document.createTextNode(Math.random()));
  console.log('working');
});

function testScore() {
  console.log(score[0].innerText);
}
