   var secNumber = 7; 

while (true) {
    let message = Number(prompt("What is the secret number? Take a guess from 1 to 20."));

    if (message === secNumber) {
     alert("Lucky number 7! You guessed it right!");
            break;
        } else {
            alert("You seem unlucky today. Try again.");
    
        };
} ;
