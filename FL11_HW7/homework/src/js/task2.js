const FIRST_MAX_PRICE = 100;
const FIRST_MAX_POCKET = 8;
let nextPlay;
let minPocket = 0;
let maxPocket = 8;
let denominator = 2;
let maxAttempts = 3;
let maxPrize = 100;
let middlePrize = maxPrize / denominator;
let minPrize = middlePrize / denominator;
let wonPrize = 0;
let prize = maxPrize;
let attemptsLeft = maxAttempts;

let newPlay = confirm('Do you want to play a game?');

if (!newPlay) {
  alert('You did not become a billionaire, but can.');
} else {
  let numToGuess =
    Math.floor(Math.random() * (maxPocket + 1 - minPocket)) + minPocket;
  for (let i = 0; i < maxAttempts; i++) {
    let userGuess = +prompt(
      'Choose a roulette pocket number from 0 to 8 \nAttempts left: ' +
        attemptsLeft +
        '\nTotal prize: ' +
        wonPrize +
        '$\nPossible prize on current attempt:' +
        prize +
        '$'
    );

    attemptsLeft -= 1;
    prize = prize / denominator;

    if (userGuess === numToGuess) {
      switch (i) {
        case 0:
          wonPrize += maxPrize;
          break;
        case 1:
          wonPrize += middlePrize;
          break;
        case denominator:
          wonPrize += minPrize;
          break;
        default:
          break;
      }
      nextPlay = confirm(
        'Congratulation, you won! Your prize is: ' +
          wonPrize +
          '$.Do you want to continue?'
      );
      break;
    } else if (attemptsLeft === 0) {
      alert('Thank you for your participation. Your prize is: 0$');
      nextPlay = confirm('Do you want to play a game again?');
    }
  }

  if (nextPlay === false) {
    alert('Thank you for your participation. Your prize is: ' + wonPrize + '$');
    nextPlay = confirm('Do you want to play a game again?');
    alert('Sorry, try one more time, we have some technical problems.');
  } else {
    do {
      if (attemptsLeft === 0) {
        wonPrize = 0;
        maxPrize = FIRST_MAX_PRICE;
        maxPocket = FIRST_MAX_POCKET;
      } else {
        maxPocket += denominator * denominator;
        maxPrize *= denominator;
      }
      let prize = maxPrize;
      let middlePrize = maxPrize / denominator;
      let minPrize = middlePrize / denominator;

      attemptsLeft = maxAttempts;
      let numToGuess =
        Math.floor(Math.random() * (maxPocket + 1 - minPocket)) + minPocket;
      for (let i = 0; i < maxAttempts; i++) {
        let userGuess = +prompt(
          'Choose a roulette pocket number from 0 to' +
            maxPocket +
            '\nAttempts left: ' +
            attemptsLeft +
            '\nTotal prize: ' +
            wonPrize +
            '$\nPossible prize on current attempt:' +
            prize +
            '$'
        );

        attemptsLeft -= 1;
        prize = prize / denominator;

        if (userGuess === numToGuess) {
          switch (i) {
            case 0:
              wonPrize += maxPrize;
              break;
            case 1:
              wonPrize += middlePrize;
              break;
            case denominator:
              wonPrize += minPrize;
              break;
            default:
              break;
          }
          nextPlay = confirm(
            'Congratulation, you won! Your prize is: ' +
              wonPrize +
              '$.Do you want to continue?'
          );
          break;
        } else if (attemptsLeft === 0) {
          alert('Thank you for your participation. Your prize is: 0$');
          nextPlay = confirm('Do you want to play a game again?');
        }
      }
    } while (nextPlay);
    alert('Maybe you want to try one more time.');
  }
}
