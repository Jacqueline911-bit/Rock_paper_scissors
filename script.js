window.onload = beginningAnimation;

let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll(".choice-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    playRound(playerSelection, computerPlay());

    if (playerScore === 5 || computerScore === 5) {
      endGame();
    } 
  });
});

function displayScores() {
    const playerScoreElement = document.getElementById("player-score");
    const computerScoreElement = document.getElementById("computer-score");
    playerScoreElement.textContent = `Your Score: ${playerScore}`;
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;
  }
  



function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (!playerSelection || !computerSelection) {
    displayResults("Please choose Rock, Paper, or Scissors to start the game.");
    return;
  }

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    displayResults("It's a tie!");
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    keepPlayerScore();
    displayResults(`You win! ${playerSelection} beats ${computerSelection}`);
  } else {
    computerScore++;
    keepCpuScore();
    displayResults(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
}

function displayResults(str) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = str;
}

function keepPlayerScore() {
  const playerScoreElement = document.getElementById("player-score");
  playerScoreElement.textContent = playerScore;
}

function keepCpuScore() {
  const computerScoreElement = document.getElementById("computer-score");
  computerScoreElement.textContent = computerScore;
}

function endGame() {
    buttons.forEach((button) => {
      button.removeEventListener("click", () => {});
    });
  
    if (playerScore > computerScore) {
      displayResults("Congratulations! You win the game!");
    } else if (computerScore > playerScore) {
      displayResults("Sorry, you lose the game.");
    } else {
      displayResults("It's a tie! The game ends in a draw.");
    }
  }
  function beginningAnimation() {
    displayResults("Welcome to Rock Paper Scissors! Let's play 5 rounds.");
    game();
  }
  function game() {
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt(`Round ${round}: Enter your choice: Rock, Paper, or Scissors`);
      const computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
    }
  
    endGame();
  }

  function displayScores() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Your Score: ${playerScore}, Computer Score: ${computerScore}`;
  }
  