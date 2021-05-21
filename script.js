'use strict';

/*
document.querySelector('.message');
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
console.log((document.querySelector('.guess').value = 12));
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;
const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayMsg1 = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayMsg2 = function (score) {
  document.querySelector('.score').textContent = score;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //  document.querySelector('.message').textContent = 'Correct Number';
  console.log(guess, typeof guess);
  //no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMsg('No Number');
  }
  //when player wins
  else if (guess === secretNumber) {
    displayMsg('Correct number');
    displayMsg1(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayMsg2(score);
    if (score > highscore) highscore = score;

    document.querySelector('.highscore').textContent = highscore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMsg(guess > secretNumber ? 'TOO HIGH!' : ' TOO LOW');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMsg('YOU LOST THE GAME');
      displayMsg2('0');
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.message').style.width = '30rem';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMsg('Start Guessing');
  displayMsg2(score);
  displayMsg1('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
/* 
  //too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO HIGH';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }
  }
  //too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO LOW';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }
  }*/
