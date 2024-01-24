function runGame() {
    // establish random target number between a1 and 100:
    const randomNumber = (Math.random() * 100);    //note can establish randomNumber as a const rather than a let as each time functon/game is run, we will only establish 1 random number for that play of the game (ie upon each run/call of this specific function). 
    const randomInteger = (Math.floor(randomNumber)); // flooring above established random number to remove decimals and ensure we produce a target integer. 
    const target = randomInteger + 1; // need to add +1 as theoretically otehrwise we could end up with an assigned value of 0 (although that would avergae as only 1% of the time. It would still be a bug / not meet with our rule-set and design paramaters) 

    let guessString = ""; // variable for user response in form of string initialized with an empty string. 
    let guessNumber = 0;  // variable to hold user response correctly converted to a number, initialized to hold 0. 
    let correct = false; // initialize default variable for whether user input vs target is correct to 'false'? 

    let numTries = 0; // variable for number of tries/guesses user has made in effort to land on the value of 'target', initialized to hold 0. 

    do {
        guessString = prompt("I am thinking of a number in the range of 1 to 100.\n\nWhat is the number?"); // note that we need this step as 'prompt' automatically returns the users input as a string, even if they do happen to input a number. 
        guessNumber = +guessString; // we use a unary '+' operator here to coerce a number from our string and appropriately assign to our 'guessNumber' variable.
        ++numTries;
        correct = checkGuess(guessNumber, target); // Appropriately pass in the relevant arguments here and call our 'checkGuess' function. (This function is etsbalished below but will automatically be 'hoisted up' in memory upon running of the script/file so that it can be appropriatley called and utilized here higher/earlier in the script.)         
    } while (!correct);

    // do while loop above exits only when correct === true so final action of this funciton is to alert user that they found the correct target number: 
    alert("You got it! The number was " + target + ".\n\nIt took you " + numTries + " tries to guess correctly.");

}


function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {  // Personal Note: 'isNan()' with a lowercase n at the end is not valid function name.. Function is: 'isNaN()' with 2 capital N's. :)
        alert("You have not entered a number.\n\nPlease enter a number in the 1-100 range.");
    }
    else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert("Please enter a number in the 1-100 range.");
    }
    else if (guessNumber > target) {
        alert("Your number is too large!");
    }
    else if (guessNumber < target) {
        alert("Your number is too small!");
    }
    else {
        correct = true;
    }

    return correct;
}