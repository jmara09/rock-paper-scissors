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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Tie! Both chose ${humanChoice}.`);
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore++;
      console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  } else {
    if (computerChoice === "paper") {
      humanScore++;
      console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }
}

getComputerChoice();
getHumanChoice();
console.log(getComputerChoice());
