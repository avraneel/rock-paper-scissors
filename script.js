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
    const moveDisplay = document.createElement("p");
    const roundResult = document.createElement("p");
    const scoreDisplay = document.createElement("p");

    const computerChoice = getComputerChoice();

    moveDisplay.textContent = "You play " + humanChoice;
    moveDisplay.textContent += " | Computer plays " + computerChoice;

    if( humanChoice == "rock" && computerChoice == "paper" 
        || humanChoice == "paper" && computerChoice == "scissors" 
        || humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        roundResult.textContent = "Computer Wins";
    }
    else if( humanChoice == "paper" && computerChoice == "rock" 
             || humanChoice == "scissors" && computerChoice == "paper" 
             || humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        roundResult.textContent = "You Win";
    }
    else
        roundResult.textContent = "Draw Round";

    scoreDisplay.textContent = "Computer: " + computerScore + " | You: " + humanScore + " ";

    if(computerScore >= 5)
        scoreDisplay.textContent += "|| Computer wins the game ||";
    else if(humanScore >= 5)
        scoreDisplay.textContent += "|| You win the game ||";

    resultSection.appendChild(moveDisplay);
    resultSection.appendChild(roundResult);
    resultSection.appendChild(scoreDisplay);
}

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));