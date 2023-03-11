function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"]
    let randNo = Math.floor(Math.random()*3)
    return choice[randNo]
}

function playgame(playerSelection, computerSelection){
    playerSelection = prompt("Enter your choice: ");
    computerSelection = getComputerChoice()
    console.log(playerSelection +computerSelection)
    switch(playerSelection + computerSelection){
        case "paperrock":
        case "rockscissors":;
        case "scisorspaper":
            console.log("congratulations! paper beats rock");
            break;
        case "rockpaper":
        case "scisorsrock":
        case "paperscissors":
            console.log("you lose! comp wins user")
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("draw game")
    }
}

// function game(){
//     for(let i =0; i< 5; i++){
//         console.log(playgame())
//     }
//}
(playgame())