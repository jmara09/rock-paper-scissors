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
  console.log(choice);
}

getComputerChoice();
getHumanChoice();
console.log(getComputerChoice());
