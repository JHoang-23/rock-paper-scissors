
let humanScore = 0
let computerScore = 0
let gamesPlayed = 0

const outcomes = {
  rock: { rock: "draw", paper: "lose", scissors: "win" },
  paper: { rock: "win", paper: "draw", scissors: "lose" },
  scissors: { rock: "lose", paper: "win", scissors: "draw" }
}

const messages = {
  win: "You win! ",
  lose: "You lose! ",
  draw: "It's a draw!"
}

const reasons = {
  rockpaper: "Paper beats Rock",
  rockscissors: "Rock beats Scissors",
  paperrock: "Paper beats Rock",
  paperscissors: "Scissors beats Paper",
  scissorsrock: "Rock beats Scissors",
  scissorspaper: "Scissors beats Paper"
}

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

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()){
    const choiceText = document.createElement('p')
    choiceText.textContent = `
    You chose: ${humanChoice} ***** CPU chose: ${computerChoice}`
    
    gameLog.append(choiceText)

    const resultsText = document.createElement('p')
    const result = outcomes[humanChoice][computerChoice]
    let key = humanChoice + computerChoice;

    if (result === "win") {
    humanScore++
    } else if (result === "lose") {
    computerScore++
    }

    const outcomeMessage = messages[result]
    let reasonMessage = ""
    if (result !== "draw"){
        reasonMessage = reasons[humanChoice + computerChoice] //eg rockpaper
    }

    resultsText.textContent = outcomeMessage + reasonMessage

    gameLog.append(resultsText)
    displayScore()
    gamesPlayed++


}


const scoreElement = document.querySelector('.score')
function displayScore(){
    console.log(gamesPlayed)
    const currentScore = document.createElement('h2')

    if (gamesPlayed < 1){ //if first game, create element, change text content and add to score.
        currentScore.textContent = `Human: ${humanScore} - CPU: ${computerScore}`
        scoreElement.append(currentScore)
    } else{
        const existingScore = document.querySelector('h2')
        existingScore.textContent = `Human: ${humanScore} - CPU: ${computerScore}`

    }

    const winnerText = document.createElement('p')
    if (humanScore === 5){
        winnerText.textContent = "You win!"
        scoreElement.append(winnerText)
        btnContainer.style.display = 'none'

    } else if (computerScore === 5){
        winnerText.textContent = "Computer wins!"
        scoreElement.append(winnerText)
        btnContainer.style.display = 'none'
    }

}
const btnContainer = document.querySelector(".btn-container")
console.log(btnContainer)
btnContainer.addEventListener("click", function(e){
    console.log(e.target.id)

    playRound(e.target.id)
})


const gameLog = document.querySelector(".game-log")
