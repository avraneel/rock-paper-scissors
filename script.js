"use strict";

console.log("Test");

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

function playRound() {
    const human = getHumanChoice().toLowerCase();
    const computer = getComputerChoice();
    console.log("Computer plays " + computer);

    if(human == "rock" && computer == "paper" || human == "paper" && computer == "scissors" || human == "scissors" && computer == "rock") {
        computerScore++;
        console.log("Computer wins.");
    }
    else if(human == "paper" && computer == "rock" || human == "scissors" && computer == "paper" || human == "rock" && computer == "scissors") {
        humanScore++;
        console.log("Human wins.");
    }
    else {
        console.log("Draw round.")
    }
}

playRound();