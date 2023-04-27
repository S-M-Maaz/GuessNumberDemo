'use strict';

let score = 20;
let highScsore = 0;
let randomNum = Math.trunc(Math.random() * 20 + 1);
const number = document.querySelector('.number');
const check = document.querySelector('.check');

document.querySelector('.number').textContent = '?';

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 0) {
    if (!guess) {
      document.querySelector('.message').textContent = 'Enter a Number';
    } else if (guess < randomNum) {
      score--;
      document.querySelector('.message').textContent = 'Too Low';
      document.querySelector('.score').textContent = score;
    } else if (guess > randomNum) {
      score--;
      document.querySelector('.message').textContent = 'Too High';
      document.querySelector('.score').textContent = score;
    } else if (guess === randomNum) {
      document.querySelector('.message').textContent = 'Correct Guess';
      document.querySelector('body').style.backgroundColor = 'Blue';
      document.querySelector('.number').style.width = '30rem';

      if (score > highScsore) {
        highScsore = score;
        document.querySelector('.highscore').textContent = highScsore;
      }
    }
  } else {
    document.querySelector('.message').textContent = 'You Loose';
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  randomNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
});
