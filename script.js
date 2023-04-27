'use strict';
let randomNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(score);
  if (score > 1) {
    if (!guess) {
      displayMessage('Enter a number');
    } else if (guess === randomNum) {
      displayMessage('Correct Guess');

      document.querySelector('.number').textContent = randomNum;
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== randomNum) {
      score--;
      displayMessage(guess > randomNum ? 'Too high' : 'Too low');

      document.querySelector('.score').textContent = score;
      console.log(score);
    }
    //document.querySelector('.message').textContent = 'Too Low';

    //document.querySelector('.score').textContent = score--;
    // else if (guess > randomNum) {
    // document.querySelector('.message').textContent = 'Too High';
    //document.querySelector('.score').textContent = score--;
  } else {
    displayMessage('You lose');
    document.querySelector('.score').textContent = score == 1 ? --score : score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  randomNum = Math.trunc(Math.random() * 20 + 1);
});
