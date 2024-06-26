let randomNumber = Math.floor(Math.random() * 10) + 1;


function checkGuess() {
    
    const guess =document.getElementById('guessInput').value;

    
    const message = document.getElementById('message');

    if (guess == randomNumber) {
        message.textContent = 'Congratulations! You guessed the correct number🥳';
        message.style.color = 'green';
    } else if (guess < randomNumber) {
        message.textContent = 'Too low! Try a higher number.🥲';
        message.style.color = 'blue';
    } else {
        message.textContent = 'Too high! Try a lower number.😵';
        message.style.color = 'red';
    }

   
    
}

console.log(randomNumber);