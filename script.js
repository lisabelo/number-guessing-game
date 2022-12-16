/* 
A simple guess the number type game. The game should choose a random number between 1 and 100, 
then challenge the player to guess the number in 10 turns. After each turn, the player should be told if 
they are right or wrong, and if they are wrong, tell whether the guess was too low or too high. It should also 
tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or 
once they run out of turns. When the game ends, the player should be given an option to start playing again.
...
*/ 



// Generating random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Adding variables to store out data
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const startBtn = document.querySelector('.start-btn');

let guessCount = 1;

// Function
function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
    guessField.value = '';
    guessField.focus();

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        console.log('Reached 10 count');
        lastResult.textContent = '!!!GAME OVER';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

// Event listener
guessSubmit.addEventListener('click', checkGuess);



function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    startBtn.style.display = 'block';
    startBtn.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }
    startBtn.style.display = 'none';

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'inherit';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}