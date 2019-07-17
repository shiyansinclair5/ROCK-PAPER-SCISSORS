function computerPlay() {
      let materials = ["rock", "paper", "scissors"];
      let rand = Math.floor(Math.random() * 3);

      return materials[rand];
    }

function playRound() {

  let roundResult = "";

   do {
     playerSelection = window.prompt("Enter one of the following: rock, paper, scissors.").toLowerCase();
  } while (playerSelection != "paper" && playerSelection != "rock" && playerSelection != "scissors" || playerSelection == "");

  computerSelection = computerPlay();

  console.log("You selected " + playerSelection + ".");
  console.log("Computer selected " + computerSelection + ".");

  if (computerSelection == "paper") {
    if (playerSelection == "paper") {
      console.log("Tied round.");
      roundResult = "tie";
    } else if (playerSelection == "scissors") {
      console.log("Winner!.");
      roundResult = "Win";
    } else {
      console.log("You lose!.");
      roundResult = "lose";
    }
  } else if (computerSelection == "scissors") {
    if (playerSelection == "paper") {
      console.log("You lose!.");
      roundResult = "lose";
    } else if (playerSelection == "scissors") {
      console.log("Tied round.");
      roundResult = "tie";
    } else {
      console.log("Winner!.");
      roundResult = "Win";
    }
  } else {
    if (playerSelection == "paper") {
      console.log("Winner!.");
      roundResult = "win";
    } else if (playerSelection == "scissors") {
      console.log("You lose!.");
      roundResult = "lose";
    } else {
      console.log("Tied round.");
      roundResult = "tie";
    }
  }

  return roundResult;
}

function game() {

  let playerPoints = 0,
  computerPoints = 0;

  for (let i = 0; i < 5; ++i) {

    const result = playRound();

    if (result == "win") {
      playerPoints++;
    } else if (result == "lose") {
      computerPoints++;
    } else {
      playerPoints++;
      computerPoints++;
    }
  }

  if (playerPoints > computerPoints) {
    console.log("Winner!");
  } else if (playerPoints < computerPoints) {
    console.log("You lose!.");
  } else {
    console.log("Tied round.");
  }

  console.log("Player: " + playerPoints + "\n" + "Computer: " + computerPoints);
}

// game();
