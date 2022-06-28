function computerPlay()
{
    let randPlay = Math.floor(Math.random() * 3) + 1
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

function game()
{
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++)
    {
        const playerSelection = prompt();
        const computerSelection = computerPlay();

        const result = playRound(playerSelection, computerSelection);
        if (result.includes('You win!')) 
        {
            playerScore++;
        }
        else if (result.includes('You lose!'))
        {
            computerScore++;
        }

        console.log(result);
    }
    console.log(playerScore + ", " + computerScore); 
}

game();