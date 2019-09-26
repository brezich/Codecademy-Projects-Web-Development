let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate the new secret target number
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

// Determine which guess is closest to the target number
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  const humanDiff = Math.abs(targetNumber - humanGuess);
  const computerDiff = Math.abs(targetNumber - computerGuess);
  if (humanDiff <= computerDiff) {
    return true;
  } else {
    return false;
  }
}

// Increase the winner's score after each round
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

// Update the round number after each round
const advanceRound = () => {
  currentRoundNumber++;
}
