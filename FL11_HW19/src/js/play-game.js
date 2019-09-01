/* const playGame = buttonValue => {
  const moveVariants = {
    1: 'Scissors',
    2: 'Paper',
    3: 'Rock'
  };

  playerMove = buttonValue;
  let computerMove = moveVariants[getRandomNumber(1, 3)];

  if (
    (playerMove === 'Scissors' && computerMove === 'Paper') ||
    (playerMove === 'Paper' && computerMove === 'Rock') ||
    (playerMove === 'Rock' && computerMove === 'Scissors' && round <= 3)
  ) {
    let result = 'won';
    addGameDescription(result, round, playerMove, computerMove);
    return playerWins++, round++;
  } else if (playerMove === computerMove) {
    let result = 'not won, try again';
    addGameDescription(result, round, playerMove, computerMove);
  } else {
    let result = 'lost';
    addGameDescription(result, round, playerMove, computerMove);
    return computerWins++, round++;
  }
};

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

export { playGame, getRandomNumber }; */
