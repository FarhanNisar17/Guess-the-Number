'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highSore = 0;

let displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('Cant compare nothing');
  } else if (guess === secretNumber) {
        displayMessage('Correct');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highSore) {
      highSore = score;
      document.querySelector('.highscore').textContent = highSore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
        displayMessage(guess > secretNumber ? 'Lower Value' : 'higher Value');        
      score--;
      document.querySelector('.score').textContent = score;
    } else {
        displayMessage('You Lost!🚨')
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...')
});