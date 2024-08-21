function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;

  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, or Scissors?");
  choice = choice.toLowerCase();

  if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    alert(
      "Invalid input. Please choose one of the following: rock, paper, scissors."
    );
    getHumanChoice();
  } else {
    return choice;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let gameCount = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`Tie! Both chose ${humanChoice}.`);
    } else if (humanChoice === "rock") {
      if (computerChoice === "scissors") {
        humanScore++;
        console.log(`You won! Rock beats Scissors`);
      } else {
        computerScore++;
        console.log(`You lose! Paper beats Rock`);
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        humanScore++;
        console.log(`You won! Paper beats Rock`);
      } else {
        computerScore++;
        console.log(`You lose! Scissors beats Paper`);
      }
    } else {
      if (computerChoice === "paper") {
        humanScore++;
        console.log(`You won! Scissors beats Paper`);
      } else {
        computerScore++;
        console.log(`You lose! Rock beats Scissors`);
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    gameCount++;
  }

  console.log(gameCount);
  console.log(humanScore);

  if (gameCount === 5) {
    if (humanScore > computerScore) {
      return console.log("You win!");
    } else if (computerScore > humanScore) {
      return console.log("You lose!");
    } else {
      return console.log("It's a tie.");
    }
  }
}

playGame();
