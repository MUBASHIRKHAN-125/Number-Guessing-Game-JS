
let randumNum = Math.ceil((Math.random() * 100));
let count = 0;

let chances = document.getElementById('chances');
let result = document.getElementById('result');
let btn = document.querySelector('button')

btn.addEventListener("click", () => {

    let userInput = document.getElementById('user').value;

    if (userInput < 1 || userInput > 100) {

        result.innerText = "Please enter a number between 1 and 100.";
        chances.innerText = "Your Number Wrong!";
        return;

    }
    let userNumber = userInput;

    if (userNumber == randumNum) {
        result.innerText = "Wow, you’re a legend! You guessed it like a pro!";
        chances.innerText = "You Win";
        return;
    }

    let absoluteNumber = Math.abs(userNumber - randumNum)

    if (userNumber > randumNum && absoluteNumber <= 5) {

        result.innerText = "Oops! A little too high. Try going a bit lower!";

    } if (userNumber < randumNum && absoluteNumber <= 5) {

        result.innerText = "Oops! A little too low. Try going a bit higher!";

    }

    count++

    if (count == 1) {
        chances.innerText = "Sorry! Wrong number. You have 2 chances left.";

    } if (count == 2) {
        chances.innerText = "Sorry! Wrong number. You have 1 chance left.";

    } if (count == 3) {
        chances.innerText = `Game over! The correct number was ${randumNum}. \n Unfortunately,  you had 3 chances to guess.`;
    }

});
