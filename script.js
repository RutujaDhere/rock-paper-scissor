const choices = ['rock', 'paper', 'sissors'];

const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const playAgain = document.getElementById('reset');
const user_select = document.getElementById('user-select');
const computer_select = document.getElementById('computer-select');
const winner = document.getElementById('win');


let userChoice = undefined;
let score = 0;

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');
        
        main.style.display = 'none';
        selection.style.display = 'flex';
        checkWinner();

    })
});

playAgain.addEventListener('click', () => {
    //show the main hide selection
    main.style.display = 'flex';
    selection.style.display = 'none';
})

function checkWinner() {
    const compChoice = pickRandomChoice();

    updateSelection(user_select, userChoice);
    updateSelection(computer_select, compChoice);

        console.log(userChoice);
        console.log(compChoice);
    if(userChoice === compChoice){
        //user draw
        winner.innerText = 'draw'
    } else if(
        (userChoice === 'paper' && compChoice === 'rock') 
        || (userChoice === 'rock' && compChoice === 'sissors') 
        || (userChoice === 'sissors' && compChoice === 'paper') ){
            //user win
            updateScore();
            winner.innerText = 'win'
        } else {
            //user lose
            
            winner.innerText = 'lose'
        }
        //show the selection hide main
        main.style.display = 'none';
        selection.style.display = 'flex';
}


function updateScore() {
    score += 1;

    scoreEl.innerText = score;
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice) {

    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-sissors');

   const image = selectionEl.querySelector('img')
   selectionEl.classList.add(`btn-${choice}`);
   image.src = `icon-${choice}.png`;
   image.alt = choice;

}