/*let score =  JSON.parse(localStorage.getItem('score')) ||
            {
                wins: 0,
                losses: 0,
                ties: 0
            }*/

            const score = {
                wins: 0,
                losses: 0,
                ties: 0
            } ;
            //JSON.parse(localStorage.getItem('score'));
            
            updateScoreElement();

            
            function playGame(playerMove){

                const computerMove = pickComputerMove();
                let result = '';

                if (playerMove === 'Sissors'){
                    if (computerMove === 'Rock'){
                        result = 'You Lose.';
                    } else if (computerMove === 'Paper'){
                        result = 'You Won.';
                    } else if (computerMove === 'Sissors'){
                        result = 'Tie';
                    }
                } else if (playerMove === 'Paper'){
                    if (computerMove ==='Rock'){
                        result = 'You Won';
                    } else if (computerMove === 'Paper'){
                        result = 'Tie';
                    } else if (computerMove === 'Sissors'){
                        result = 'You Lose';
                    }
                } else if (playerMove === 'Rock'){
                    if (computerMove === 'Rock'){
                        result = 'Tie';
                    } else if (computerMove === 'Paper'){
                        result = 'You Lose';
                    } else if (computerMove === 'Sissors'){
                        result = 'You Won';
                    }
                }

                if (result === 'You Won'){
                    score.wins += 1;
                } else if (result  === 'You Lose'){
                    score.losses += 1;
                } else if (result === 'Tie'){
                    score.ties += 1;
                }

                localStorage.setItem('score', 'hello');
                //JSON.stringify(score)

                updateScoreElement();

                document.querySelector('.js-result').
                innerHTML = `$" ${result} "$`;

                document.querySelector('.js-moves').innerHTML 
                = `YOU
          <img src ="/images/${playerMove}-emoji.png"
          class = "move-icon">
          <img src = "images/${computerMove}-emoji.png"
          class = "move-icon">
          Computer`;
                
                
                /*alert(`You picked:- ${playerMove}. Computer picked:- ${computerMove}. 
                ${result}
        Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);*/
      }


                function updateScoreElement(){

                    document.querySelector('.js-score').innerHTML= 
            `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

                }


                function pickComputerMove(){
                    const randomNumber = Math.random();
                    let computerMove = '';

                    if (randomNumber >= 0 && randomNumber<1/3){
                        computerMove = 'Rock';
                    } else if (randomNumber >= 1/3 && randomNumber<2/3){
                        computerMove = 'Paper';
                    } else if (randomNumber >= 2/3 && randomNumber< 1){
                        computerMove = 'Sissors';
                    }
                    return computerMove;
                }