
let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3) + 1
    if (choice == 1){
        return "rock"
    } else if (choice == 2){
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice(){
    let userChoice = prompt("Rock, Paper or Scissors?")
    console.log(userChoice)
}

getHumanChoice()

function playRound(humanChoice, computerChoice){
    if (computerChoice == "rock" && humanChoice == "rock"){
        console.log("Draw! Rock and Rock")
    } else if (computerChoice == "rock" && humanChoice == "paper"){
        console.log("You win! Paper beats Rock!")
    } else if (computerChoice == "rock" && humanChoice == "scissors"){
        console.log("You lose! Rock beats scissors!")
    }
}

const computerChoice = getComputerChoice()
const humanChoice = getHumanChoice().toLowerCase()