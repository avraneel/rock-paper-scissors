"use strict";

function getComputerChoice() {
    const value = Math.floor(Math.random()*3);
    if(value == 0) {
        return "rock";
    } 
    else if(value == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter your choice");
}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

function playRound(humanChoice) {

    const resultSection = document.querySelector(".result");

    const humanMoveDisplay = document.createElement("p");
    humanMoveDisplay.textContent = "You play " + humanChoice;
    resultSection.appendChild(humanMoveDisplay);

    //const human = getHumanChoice().toLowerCase();
    const computer = getComputerChoice();

    const computerMoveDisplay = document.createElement("p");
    computerMoveDisplay.textContent = "Computer plays " + computer;
    resultSection.appendChild(computerMoveDisplay);

    const roundResult = document.createElement("p");

    if( humanChoice == "rock" && computer == "paper" 
        || humanChoice == "paper" && computer == "scissors" 
        || humanChoice == "scissors" && computer == "rock") {
        computerScore++;
        roundResult.textContent = "Computer Wins";
    }
    else if( humanChoice == "paper" && computer == "rock" 
             || humanChoice == "scissors" && computer == "paper" 
             || humanChoice == "rock" && computer == "scissors") {
        humanScore++;
        roundResult.textContent = "You Win";
    }
    else
        roundResult.textContent = "Draw Round";

    resultSection.appendChild(roundResult);
}

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));

function playGame() {
    for(let i = 0; i<5; i++) {
        console.log("Round " + (i+1));
        playRound();
    }
    console.log("Human has " + humanScore + " points.");
    console.log("Computer has " + computerScore + " points.");
    if(humanScore > computerScore) {
        console.log("Human wins the game.");
    }
    else if(computerScore > humanScore) {
        console.log("Computer wins the game.")
    }
    else {
        console.log("Game is draw.");
    }
}