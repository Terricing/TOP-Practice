function computerPlay()
{
    let randPlay = Math.floor(Math.random() * 3) + 1
    console.log(randPlay);
    switch (randPlay)
    {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}

function playRound(playerSelection, computerSelection)
{ 
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "Tie! No one won";
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper'))
    {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection + '.';
    }
    else
    {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection + '.';
    }
}

console.log(playRound('paper', computerPlay()));