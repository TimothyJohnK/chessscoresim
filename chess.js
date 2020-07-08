// https://github.com/ajGingrich/react-pgn-viewer

const score = document.getElementById('scorebar').textContent;
const button = document.getElementById('button');

const scoreMaker = function () {
  const rawScore = Math.min(Math.random() * 21, 20) - 10; // a float from -10..10
  const truncatedScore = rawScore.toFixed(2);
  return (score.textContent = truncatedScore);
};

button.addEventListener(
  'click',
  () => (document.getElementById('scorebar').textContent = scoreMaker())
);
