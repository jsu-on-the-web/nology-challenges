
/*----------  Function Declaration  ----------*/



/*----------  Variable Declaration  ----------*/

let x = 1;
let y = 2;

let userInput = prompt('Please enter some input');

/*----------  Script assignment  ----------*/

// Challenge 1
if (x < y) {
    console.log("x is smaller than y");
} else if (x > y) {
    console.log("x is greater than y");
} else {
    console.log("x is equal to y");
}

// Challenge 2 
if (parseFloat(userInput) || parseInt(userInput)) {
    console.log(`The input squared is ${userInput ** 2}`);
} else if (typeof userInput === 'string') {
    console.log(`The input is ${userInput}`);
} else {
    console.log("Invalid input");
}
