'use strict';

let Secretnumber = Math.trunc(Math.random() * 20 + 1);
console.log(Secretnumber);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // to convert the string to number
  console.log(typeof guess, guess);

  if (!guess) {
    // document.querySelector('.message').textContent = '👎 No Number!';
    displayMessage('⛔️ No number!');
  } else if (guess === Secretnumber) {
    document.querySelector('.number').textContent = Secretnumber;
    // document.querySelector('.message').textContent = '🥳 Correct Number';
    displayMessage('🥳 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== Secretnumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > Secretnumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   else if (guess > Secretnumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥You lost the game..!';
  //       document.querySelector('body').style.backgroundColor = 'red';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < Secretnumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥You lost the game..!';
  //       document.querySelector('body').style.backgroundColor = 'red';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  Secretnumber = Math.trunc(Math.random() * 20 + 1);
  console.log('A New Game', Secretnumber);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
