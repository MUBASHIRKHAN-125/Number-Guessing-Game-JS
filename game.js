let userConfirm = confirm("DO you want to play the game?");

if (userConfirm) {

    let ranNum = Math.ceil((Math.random() * 100));

    let count = 0;

    while (count < 3) {

        let userProm = parseInt(prompt("Please enter a number."));

        if (userProm == ranNum) {

            alert("Wow, you’re a legend! You guessed it like a pro!");

            break;

        }

        let absoluteNumber = Math.abs(userProm - ranNum)

        if (userProm > ranNum && absoluteNumber <= 2) {

            alert("Oops! A little too high. Try going a bit lower!");

        } else if (userProm < ranNum && absoluteNumber <= 2) {

            alert("Oops! A little too low. Try going a bit higher!");
        }

        else {
            if (count == 0) {
                alert("Sorry! Wrong number. You have 2 chances left.");
            } if (count == 1) {
                alert("Sorry! Wrong number. You have 1 chance left.");
            } if (count == 2) {
                alert("Sorry! Wrong number. No chances left.");
            }
        }
        count++
    };
    if (count == 3) {
        alert(`Game over! The correct number was ${ranNum}. Unfortunately, you had 3 chances to guess.`);
    };

};

