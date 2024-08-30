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

function getHumanChoice(e) {
  let choice = e.target.textContent.toLowerCase();
  return choice;
  // choice = choice.toLowerCase();

  // if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
  //   alert(
  //     "Invalid input. Please choose one of the following: rock, paper, scissors."
  //   );
  //   getHumanChoice();
  // } else {
  //   return choice;
  // }
}

function playGame(e) {
  let humanScore = 0;
  let computerScore = 0;

  let humanChoice = getHumanChoice(e);
  let computerChoice = getComputerChoice();

  let scoreBoard = document.querySelector("#score");
  scoreBoard.textContent = `You: ${humanScore} - Comp: ${computerScore}`;

  let result = document.querySelector("#result");

  if (humanChoice === computerChoice) {
    result.textContent = `Tie! Both chose ${humanChoice}.`;
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
      result.textContent = `You won! Rock beats Scissors`;
    } else {
      computerScore++;
      result.textContent = `You lose! Paper beats Rock`;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      result.textContent = `You won! Paper beats Rock`;
    } else {
      computerScore++;
      result.textContent = `You lose! Scissors beats Paper`;
    }
  } else {
    if (computerChoice === "paper") {
      humanScore++;
      result.textContent = `You won! Scissors beats Paper`;
    } else {
      computerScore++;
      result.textContent = `You lose! Rock beats Scissors`;
    }
  }
}

let list = document.querySelector("ul");
list.addEventListener("click", playGame);
