document.addEventListener("DOMContentLoaded", init);

function init() {
  const buttons = document.querySelectorAll(".reset-button");
  const buttonWrapper = document.querySelector(".button-wrapper");
  const gameResult = document.querySelector(".game-result");

  let round = 0;
  let playerWins = 0;
  let computerWins = 0;

  buttonWrapper.addEventListener("click", startGame);

  function startGame() {
    let buttonValue = event.target.innerHTML;
    if (buttonValue !== "Reset" && round <= 3) {
      playGame(buttonValue);
    } else {
      endGame();
    }
  }

  function playGame(buttonValue) {
    const moveVariants = {
      1: "Scissors",
      2: "Paper",
      3: "Rock"
    };

    playerMove = buttonValue;
    let computerMove = moveVariants[getRandomNumber(1, 3)];

    if (
      (playerMove === "Scissors" && computerMove === "Paper") ||
      (playerMove === "Paper" && computerMove === "Rock") ||
      (playerMove === "Rock" && computerMove === "Scissors" && round <= 3)
    ) {
      let result = "won";
      addGameDescription(result, round, playerMove, computerMove);
      round === 3 ? setTimeout(showResult, 1500) : null;
      return ++playerWins, ++round;
    } else if (playerMove === computerMove) {
      let result = "not won, try again";
      addGameDescription(result, round, playerMove, computerMove);
    } else {
      let result = "lost";
      addGameDescription(result, round, playerMove, computerMove);
      round === 3 ? setTimeout(showResult, 1500) : null;
      return ++computerWins, ++round;
    }
  }

  function addGameDescription(result, round, playerMove, computerMove) {
    const gameDescription = `Round: ${round}, ${playerMove} vs. ${computerMove}, You,ve ${result.toUpperCase()}`;
    gameResult.innerHTML = gameDescription;
  }

  function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function endGame() {
    gameResult.innerHTML = "";
    round = playerWins = computerWins = 0;
    alert("We are starting a new game. Choose your variant");
  }

  function showResult() {
    let playerWin = `You <span class="description-score">won</span>. You won ${playerWins} times. If you want to play one more time - click on the "Reset" button.`;
    let computerWin = `You <span class="description-score">lost</span>. You won only ${playerWins} times. If you want to play one more time - click on the "Reset" button.`;
    playerWins > computerWins
      ? (gameResult.innerHTML = playerWin)
      : (gameResult.innerHTML = computerWin);
  }

  /* import { addGameDescription } from "./addGameDescription.js";
  import { startGame } from "./start-game.js";
  import { playGame } from "./play-game.js";
  import { playGame, getRandomNumber } from "./play-game.js";
  import { endGame } from "./end-game.js"; */
}
