
let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3) + 1
    if (choice == 1){
        return ("rock")
    } else if (choice == 2){
        return ("paper")
    } else {
        return ("scissors")
    }
}

function getHumanChoice(){
    let userChoice = prompt("Rock, Paper or Scissors?")
    return (userChoice)
}


function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()){
    console.log(humanChoice)
    console.log(computerChoice)


    if (computerChoice == "rock"){
        if (humanChoice == "rock"){
            console.log("It's a draw!")
        } else if (humanChoice == "paper"){
            console.log("You win! Paper beats rock")
            humanScore ++
        } else{
            console.log("You lose! Rock beats scissors.")
            computerScore ++
        }
    }

    if (computerChoice == "paper"){
        if (humanChoice == "rock"){
            console.log("You lose! Paper beats rock!")
            computerScore ++
        } else if (humanChoice == "paper"){
            console.log("It's a draw!")
        } else{
            console.log("You win! Scissors beats paper")
            humanScore ++
        }
    }

    if (computerChoice == "scissors"){
        if (humanChoice == "rock"){
            console.log("You win! Rock beats scissors!")
            humanScore ++
        } else if (humanChoice == "paper"){
            console.log("You lose! Scissors beats Paper!")
            computerScore ++
        } else{
            console.log("It's a draw!")
        }
    }


}




function playGame(){
    for (let i = 0; i < 5; i++) {
        playRound()
        console.log(`The current score is:
            Computer: ${computerScore} ----- Player ${humanScore}`)
    }

    console.log(`The final score is:
        Computer: ${computerScore} ----- Player ${humanScore} `)

    printWinner()
    
}

playGame()

function printWinner(){
  if (computerScore > humanScore) {
    console.log("Computer wins!");
  } else if (computerScore < humanScore) {
    console.log("You win!");
  } else {
    console.log("It's a draw!");
  }
}