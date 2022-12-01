'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Doğru Numara';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let random = Math.floor(Math.random() * 10) + 1;
let score = 20;
let highscore = document.querySelector('.highscore').textContent;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayMessage2 = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('Numara Giriniz!!');
  } else if (guess === random) {
    displayMessage('Kazandınız');
    displayMessage2(random);
    document.querySelector('.highscore').textContent = score;
    if (score > highscore) {
      highscore = score;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    displayMessage2('30rem');
  } else if (guess !== random) {
    if (score > 1) {
      displayMessage(
        guess > random
          ? 'Daha Küçük Numara Giriniz!!'
          : 'Daha Büyük Numara Giriniz!!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Hakkınız Kalmadı Kaybettiniz!!!');
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  random = Math.floor(Math.random() * 10) + 1;
  displayMessage2('?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Sayı Giriniz');
  document.querySelector('.guess').value = '';
});
