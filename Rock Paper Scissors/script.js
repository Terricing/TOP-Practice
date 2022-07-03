function computerPlay () {
  let randPlay = Math.floor(Math.random() * 3) + 1
  switch (randPlay) {
    case 1:
      return 'rock'
      break
    case 2:
      return 'paper'
      break
    case 3:
      return 'scissors'
      break
  }
}

let playerScore = 0
let computerScore = 0

function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  if (playerSelection == computerSelection) {
    return 'Tie! No one won'
  } else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
  ) {
    playerScore++;
    return 'You win! ' + playerSelection + ' beats ' + computerSelection + '.';
  } else {
    computerScore++;
    return 'You lose! ' + computerSelection + ' beats ' + playerSelection + '.';
  }
}

const results = document.querySelector("#results");

function LogRound (playerSelection) {
    if (playerScore < 5 && computerScore < 5)
    {
        const div = document.createElement("div");
        div.textContent = playRound(playerSelection, computerPlay());
        results.appendChild(div);
    }
    else
    {
        results.textContent.innerHTML = "";
        
        if (playerScore > computerScore)
        {
            results.textContent = "Player Won"
        }
        else if (playerScore < computerScore)
        {
            results.textContent = "Computer Won";
        }
        else
        {
            results.textContent = "Tie! No one won";
        }

        // results.textContent.innerHTML += "\n\n Click space to restart";
        const restart = document.createElement('button');
        restart.textContent = 'restart';
        results.appendChild(restart);

        results.addEventListener('click', () => {
            playerScore = 0;
            computerScore = 0;
            results.innerHTML = "";
        })
    }
}

const buttons = document.getElementsByTagName('button');
const rock = buttons[0];
const paper = buttons[1];
const scissors = buttons[2];

rock.addEventListener('click', () => LogRound('rock'));
paper.addEventListener('click', () => LogRound('paper'));
scissors.addEventListener('click', () => LogRound('scissors'));