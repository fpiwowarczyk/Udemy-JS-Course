const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = function () {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert('Invalid choice! We chose Rock for you!');
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = function () {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};
 // Function with => let you omit {} and return
const getWinner = (cChoice, pChoice) =>
    cChoice === pChoice ? RESULT_DRAW : (
        cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK) ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS;


startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    let message=`You picked ${playerChoice}, computer picked ${computerChoice}, therefore you`;
    if ( winner === RESULT_DRAW) {
        message += ` had a draw!`;
    } else if (winner === RESULT_PLAYER_WINS){
        message += ' won.';
    } else {
        message += ' lost.';
    }
    alert(message);
    gameIsRunning = false;
});


// Practicing

const combine = (resultHandler,operation, ...numbers) =>{
    const validateNumber = number => {
        return isNaN(number) ? 0 : number;
    }

    let sum = 0;
    for(const num of numbers){
        if(operation === 'ADD')
            sum += validateNumber(num);
        else
            sum -= validateNumber(num);
    }
    resultHandler(sum);
}

const showResult = (messageText, result) => {
    alert(messageText + ' ' + result);
};

combine(showResult.bind(this,'The result after adding all numbers is: '),'ADD',1,4,'asd',-3,69);

combine(showResult.bind(this,'The result after subtracting all numbers is: '),'SUB',1,4,'asd',-3,69);