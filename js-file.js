function computerPlay() {
    choices = ['rock', 'paper','scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const score = document.querySelector('.score');
const outcome = document.querySelector('.outcome');
const startText = document.querySelector('.middle');
startText.setAttribute('style', 'white-space: pre;');
outcome.setAttribute('style', 'white-space: pre;');
startText.textContent = "New game of Rock, Paper, Scissors? \r\n";
startText.textContent += "Make your choice to start the game";

let wins = 0;
let losses = 0;
let ties = 0;
score.textContent= wins + " - " + ties + " - " + losses;

function playRound(playerInput, computerInput) {
    startText.style.visibility = "hidden";
    switch(playerInput)
    {
        case "rock":
            if(computerInput === "rock"){
                outcome.textContent="Tie";
                ties++;
            }
            else if(computerInput === "paper"){
                outcome.textContent="You lost! \r\nPaper beats Rock";
                losses++;
            }
            else{
                outcome.textContent="You won! \r\nRock beats Scissors";
                wins++;
            }
            break;
        case "paper":
            if(computerInput === "paper"){
                outcome.textContent="Tie";
                ties++;
            }
            else if(computerInput === "scissors"){
                outcome.textContent="You lost! \r\nScissors beats Paper";
                losses++;
            }
            else{
                outcome.textContent="You won! \r\nPaper beats Rock";
                wins++;
            }
            break;
        case "scissors":
            if(computerInput === "scissors"){
                outcome.textContent="Tie";
                ties++;

            }
            else if(computerInput === "rock"){
                outcome.textContent="You lost! \r\nRock beats Scissors";
                losses++;
            }
            else{
                outcome.textContent="You won! \r\nScissors beats Paper";
                wins++;
            }
            break;
        default:
            outcome.textContent="Should not get to default switch case";
    }
    scoreUpdate();
}

// rock.addEventListener('click',playRound('rock',computerPlay));
rock.addEventListener('click', function() {
    playRound('rock',computerPlay());
});

// paper.addEventListener('click',playRound('paper',computerPlay));
paper.addEventListener('click', function() {
    playRound('paper',computerPlay());
});

// scissors.addEventListener('click',playRound('scissors',computerPlay));
scissors.addEventListener('click',function() {
    playRound('scissors',computerPlay());
});

function scoreUpdate() {
    score.textContent= wins + " - " + ties + " - " + losses;
    if(wins === 5) {
        outcome.textContent = "Game over! You have won!";
        startText.style.visibility = "visible";
        wins = 0;
        losses = 0;
        ties = 0;
    }
    if(losses === 5) {
        outcome.textContent = "Game over! You have lost!";
        startText.style.visibility = "visible";
        wins = 0;
        losses = 0;
        ties = 0;
    }
}